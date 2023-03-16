import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/coffeContext";

import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  const { itemsInCart } = useContext(CoffeeContext);
  return (
    <header className={styles.header}>
      <img src="./logo.svg" alt="Logo" />
      <div className={styles.actions}>
        <p>
          <MdLocationOn />
          Olinda, PE
        </p>
        
        <Link to={"/checkout"}>
          <FaShoppingCart size={28} className={styles.cart} />
        </Link>
        
        {itemsInCart > 0 && (
          <span className={styles.totalItemsInCart}>{itemsInCart}</span>
        )}
      </div>
    </header>
  );
}
