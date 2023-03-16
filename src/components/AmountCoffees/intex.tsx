import { useContext, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CoffeeContext } from "../../contexts/coffeContext";

import styles from "./amountCoffes.module.css"

export function AmountCoffees() {
  const { updateAmount } = useContext(CoffeeContext)

  const [counter, setCounter] = useState(0)

  function increaseAmountOfCoffees() {
    setCounter(counter + 1)
    updateAmount(counter + 1)
  }

  function reduceAmountOfCoffees() {
    if (counter > 1) {
      setCounter(counter - 1)
      updateAmount(counter - 1)
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
