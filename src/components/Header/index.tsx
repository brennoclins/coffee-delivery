import { MdLocationOn } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa"

import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img src="./logo.svg" alt="Logo" />
      <div className={styles.actions}>
        <p>
          <MdLocationOn />
          Olinda, PE
        </p>
        <FaShoppingCart className={styles.cart} />
      </div>
    </header>
  )
}