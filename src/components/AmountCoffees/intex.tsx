import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import styles from "./amountCoffes.module.css"

export function AmountCoffees() {
  const [counter, setCounter] = useState(1)

  function increaseAmountOfCoffees() {
    setCounter(counter + 1)
  }

  function reduceAmountOfCoffees() {
    if (counter > 1) {
      setCounter(counter - 1)
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
