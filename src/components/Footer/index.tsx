import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

import { CoffeeContext } from "../../contexts/coffeContext";

import styles from "./footer.module.css";

export function Footer() {
  const { coffeeOnTheCart, orderIsFinished } = useContext(CoffeeContext);
  return (
    <footer className={styles.footer}>
      <Link to={"/"}>
        <img src="/page-success/Illustration.svg" alt="Logo" />
      </Link>

      <nav>
        <Link to={"/"}>Início</Link>
        <Link to={"/about"}>Sobre</Link>
        <Link to={"/contact"}>Contato</Link>
      </nav>
    
    </footer>
  );
}
