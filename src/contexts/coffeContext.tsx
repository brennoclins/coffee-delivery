import { createContext, ReactNode, useEffect, useState } from "react";

interface CoffeeProps {
  id: string;
  name: string;
  amount: number;
  value: number;
  imageURL: string;
}

interface CoffeeContextType {
  coffeeOnTheCart: CoffeeProps[];
  updateCoffeesInCart: ({ id, name, amount, value, imageURL }: CoffeeProps) => void;
  removeCoffeeFromCart: (id: string) => void;

  updateIndividualQuantityOfCoffeeInTheOrder: (id: string, amount: number) => void;
  totalValueOfItemsInCart: number;
  deliveryValue: number;
  individualQuantityOfCoffeeInTheOrder: number;

  orders: Order[];
  createNewOrder: ({
    zipCode,
    publicPlace,
    number,
    district,
    city,
    state,
    observation,
    formOfPayment,
  }: NewOrderFormData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

type Address = {
  zipCode: string;
  publicPlace: string;
  number: string;
  district: string;
  city: string;
  state: string;
  observation: string;
}

type Item = {
  name: string;
  amount: number;
  totalAmountPerItem: number;
}

type Order = {
  orderId: string;
  deliveryAddress: Address;
  formOfPayment: string;
  deliveryValue: number;
  totalOrder: number;
  orderItems: Item[];
}

type NewOrderFormData = {
  zipCode: string;
  publicPlace: string;
  number: string;
  district: string;
  city: string;
  state: string;
  observation: string;
  formOfPayment: string;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeOnTheCart, setCoffeeOnTheCart] = useState<CoffeeProps[]>([]);
  const [totalValueOfItemsInCart, setTotalValueOfItemsInCart] = useState(0); // valor unitario * quantidade
  const [deliveryValue, setDeliveryValue] = useState(3.5); //valor da entrega
  const [individualQuantityOfCoffeeInTheOrder, setIndividualQuantityOfCoffeeInTheOrder] = useState(0)
  
  const [orders, setOders] = useState<Order[]>([]);

  useEffect(() => {
    updateTotalValueOfItemsInCart();
  }, [coffeeOnTheCart, individualQuantityOfCoffeeInTheOrder]);


  function updateTotalValueOfItemsInCart() {
    const valueTotalItems = coffeeOnTheCart
      .map((coffee) => {
        return coffee.amount * coffee.value;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setTotalValueOfItemsInCart(valueTotalItems);
  }

  function updateCoffeesInCart({
    id,
    name,
    amount,
    value,
    imageURL,
  }: CoffeeProps) {
    const coffeeAlreadyWxistsInTheCart = coffeeOnTheCart.find(
      (cart) => cart.id === id
    );
    if (coffeeAlreadyWxistsInTheCart) {
      const filterCart = coffeeOnTheCart.filter((cart) => cart.id !== id);
      setCoffeeOnTheCart([
        ...filterCart,
        {
          id,
          name,
          amount,
          value,
          imageURL,
        },
      ]);
    } else {
      setCoffeeOnTheCart((preState) => [
        ...preState,
        {
          id,
          name,
          amount,
          value,
          imageURL,
        },
      ]);
    }
    setIndividualQuantityOfCoffeeInTheOrder(0)
  }
  
  function removeCoffeeFromCart(id: string) {
    const filterCart = coffeeOnTheCart.filter((cart) => cart.id !== id);
    setCoffeeOnTheCart(filterCart);
    setIndividualQuantityOfCoffeeInTheOrder(0)
  }

  function updateIndividualQuantityOfCoffeeInTheOrder(
    id: string,
    amount: number
  ) {

    const coffeeAvailableOnRequest = coffeeOnTheCart.map((coffee) => {
      if (coffee.id === id)
        coffee.amount = amount
      
        return coffee
    }
    );

    if (!coffeeAvailableOnRequest === undefined) {
      setCoffeeOnTheCart(coffeeAvailableOnRequest)
    } else {
      setIndividualQuantityOfCoffeeInTheOrder(amount)    
    }    
  }

  function createNewOrder({
    zipCode,
    publicPlace,
    number,
    district,
    city,
    state,
    observation,
    formOfPayment,
  }: NewOrderFormData
  ) {
    const orderItems = coffeeOnTheCart.map((coffees) => {
      const totalAmountPerItem = coffees.value * coffees.amount;
      const name = coffees.name;
      const amount = coffees.amount;

      return {
        name,
        amount,
        totalAmountPerItem,
      };
    });

    const orderId = String(new Date().getTime());

    const newOrder: Order = {
      orderId,
      deliveryAddress: {
        zipCode,
        publicPlace,
        number,
        district,
        city,
        state,
        observation,
      },
      formOfPayment,
      deliveryValue,
      totalOrder: totalValueOfItemsInCart + deliveryValue,
      orderItems,
    };

    setOders((preOrder) => [...preOrder, newOrder]);    
  }

 
  return (
    <CoffeeContext.Provider
      value={{
        coffeeOnTheCart,
        updateCoffeesInCart,
        removeCoffeeFromCart,
        updateIndividualQuantityOfCoffeeInTheOrder,
        totalValueOfItemsInCart,
        deliveryValue,
        individualQuantityOfCoffeeInTheOrder,
        createNewOrder,
        orders
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
