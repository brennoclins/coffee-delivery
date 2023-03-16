import { createContext, ReactNode, useEffect, useState } from "react";

interface CoffeeProps {
  id: string;
  name: string;
  amount: number;
  value: number;
  imageURL: string;
}

interface CoffeeContextType {
  amountCoffeesToCart: number;
  updateAmount: (amount: number) => void;
  
  coffeeInTheCart: CoffeeProps[];
  updateItemsInCart: ({ id, name, amount, value }: CoffeeProps) => void;
  removeItemInCart: (id:string) => void;
  
  totalValueOfItemsInCart: number;
  deliveryValue: number;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeInTheCart, setCoffeeInTheCart] = useState<CoffeeProps[]>([]);
  const [amountCoffeesToCart, setAmountCoffeesToCart] = useState(0);
  const [totalValueOfItemsInCart, setTotalValueOfItemsInCart] = useState(0);
  const [deliveryValue, setDeliveryValue] = useState(3.50)

  useEffect(() => {
    updateTotalValueOfItemsInCart() 
  }, [coffeeInTheCart])

  // const totalItemsInCart = coffeeInTheCart.length
  
  function updateTotalValueOfItemsInCart() {
    const valueTotalItems = coffeeInTheCart.map(coffee => {
      return (coffee.amount * coffee.value)
    }).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    setTotalValueOfItemsInCart(valueTotalItems)
  }

  function updateAmount(amount: number) {
    setAmountCoffeesToCart(amount);
  }

  function updateItemsInCart({ id, name, amount, value, imageURL }: CoffeeProps) {
    const coffeeAlreadyWxistsInTheCart = coffeeInTheCart.find(
        (cart) => cart.id === id
    );
    if (coffeeAlreadyWxistsInTheCart) {
        const filterCart = coffeeInTheCart.filter((cart) => cart.id !== id);
        setCoffeeInTheCart([
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
        setCoffeeInTheCart((preState) => [
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
  }

  function removeItemInCart(id:string) {
    const filterCart = coffeeInTheCart.filter((cart) => cart.id !== id);
    setCoffeeInTheCart(filterCart);
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeInTheCart,
        amountCoffeesToCart,
        updateAmount,
        updateItemsInCart,
        removeItemInCart,
        totalValueOfItemsInCart,
        deliveryValue,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
