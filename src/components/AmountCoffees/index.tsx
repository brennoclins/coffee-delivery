import { useContext, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CoffeeContext } from "../../contexts/coffeContext";

import styles from "./amountCoffes.module.css"

interface AmountCoffeesProps {
  amount?: number
  coffeeId?: string
}

export function AmountCoffees({amount, coffeeId}: AmountCoffeesProps) {
  const { updateIndividualQuantityOfCoffeeInTheOrder } = useContext(CoffeeContext)
  
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if(amount) {
      setCounter(amount)
    }
  },[])
   
  function updatingCoffeeQuantity(
    id: string,
    amount: number,
  ) {
    if (amount > 0) {
      updateIndividualQuantityOfCoffeeInTheOrder(id, amount);
    }
  }

  function increaseAmountOfCoffees() {
    setCounter(counter + 1)

    if(coffeeId) {
      updatingCoffeeQuantity(coffeeId, counter + 1)
    }
  }

  function reduceAmountOfCoffees() {
    if (counter > 1) {
      setCounter(counter - 1)
    }

    if(coffeeId) {
      updatingCoffeeQuantity(coffeeId, counter - 1)
    }
  }

  return (
    <div className={styles.counter}>
      <FiMinus size={26} onClick={reduceAmountOfCoffees} />
      <span>{counter}</span>
      <FiPlus size={26} onClick={increaseAmountOfCoffees} />
    </div>
  );
}
