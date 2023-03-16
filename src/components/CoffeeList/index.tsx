import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { AmountCoffees } from "../AmountCoffees/intex";
import { CoffeeContext } from "../../contexts/coffeContext";

import { COFFEE_LIST } from "../../apiFake";
import styles from "./coffeeList.module.css";

export function CoffeeList() {
  const { amountCoffeesToCart, updateAmount, updateItemsInCart } =
    useContext(CoffeeContext);

  function addCoffeeToCart(
    id: string,
    name: string,
    amount: number,
    value: number,
    imageURL: string,
  ) {
    if (amount > 0) {
      updateItemsInCart({
        id,
        name,
        amount,
        value,
        imageURL,
      });
      updateAmount(0);
    }
  }

  return (
    <section className={styles.coffeList}>
      <h2>Nossos Cafés</h2>
      <div className={styles.list}>
        {COFFEE_LIST.map((coffee) => {
          return (
            <div key={coffee.id} className={styles.coffeCard}>
              <img src={coffee.imageURL} alt={coffee.name} />
              <span className={styles.tags}>{coffee.tags}</span>
              <h3 className={styles.name}>{coffee.name}</h3>
              <p className={styles.description}>{coffee.description}</p>

              <div className={styles.buy}>
                <div className={styles.value}>
                  R$ <strong>{coffee.value}</strong>
                </div>

                <div className={styles.buyActions}>
                  <AmountCoffees />
                  <FaShoppingCart
                    size={28}
                    className={styles.buyIconButton}
                    onClick={() =>
                      addCoffeeToCart(
                        coffee.id,
                        coffee.name,
                        amountCoffeesToCart,
                        coffee.value,
                        coffee.imageURL
                      )
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
