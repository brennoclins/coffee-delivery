import { createContext, ReactNode, useState } from "react";

interface CoffeeProps {
  id: string;
  name: string;
  amount: number;
  value: number;
  imageURL: string;
}

interface CoffeeContextType {
  coffeeInTheCart: CoffeeProps[];
  amountCoffeesToCart: number;
  updateAmount: (amount: number) => void;

  itemsInCart: number;
  updateItemsInCart: ({ id, name, amount, value }: CoffeeProps) => void;
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
  const [itemsInCart, setItemsInCart] = useState(0);

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

    setItemsInCart(coffeeInTheCart.length);
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeInTheCart,
        amountCoffeesToCart,
        updateAmount,
        itemsInCart,
        updateItemsInCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
