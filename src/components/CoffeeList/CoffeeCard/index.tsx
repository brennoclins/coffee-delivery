import { FaShoppingCart } from "react-icons/fa";

import { AmountCoffees } from "../../AmountCoffees";
import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/coffeContext";

import styles from "./coffeeCard.module.css";
import { Link } from "react-router-dom";
import { priceFormatter } from "../../../utils/formatter";

type CoffeCardProps = {
  imageURL: string;
  tags: string[];
  name: string;
  description: string;
  value: number;
  id: string;
  amount: number;
  isCoffeeSelected: boolean
};

export function CoffeeCard({
  imageURL,
  tags,
  name,
  description,
  value,
  id,
  amount,
  isCoffeeSelected,
}: CoffeCardProps) {
  const {
    individualQuantityOfCoffeeInTheOrder,
    updateCoffeesInCart,
  } = useContext(CoffeeContext);

  function addCoffeeToCart(
    id: string,
    name: string,
    amount: number,
    value: number,
    imageURL: string
  ) {
    if (amount > 0) {
      updateCoffeesInCart({
        id,
        name,
        amount,
        value,
        imageURL,
      });
    }
  }

  if (isCoffeeSelected) {
    return (
      <div className={`${styles.coffeeCard} ${styles.coffeeCardSelected}`}>
        <div className={styles.coffeCardselectedImage}>
          <img src={imageURL} alt={name} />
          <h3 className={styles.name}>{name}</h3>
        </div>

        <div>
          <Link to={"/checkout"} className={styles.checkoutButton}>
            Ir para o carrinho
            <FaShoppingCart
              size={28}
              className={styles.buyIconButton}
              onClick={() => {}}
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.coffeeCard}>
      <img className={styles.coffeeCardImage} src={imageURL} alt={name} />

      <div className={styles.tags}>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </div>

      <h3 className={styles.name}>{name}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.buy}>
        <div className={styles.value}>
          <strong>{priceFormatter.format(value)}</strong>
        </div>

        <div className={styles.buyActions}>
          <AmountCoffees coffeeId={id} amount={amount} />
          <FaShoppingCart
            size={28}
            className={styles.buyIconButton}
            onClick={() =>
              addCoffeeToCart(
                id,
                name,
                individualQuantityOfCoffeeInTheOrder,
                value,
                imageURL
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
