import { FaShoppingCart } from "react-icons/fa";

import styles from "./coffeeList.module.css"

import { COFFEE_LIST } from "../../apiFake";
import { AmountCoffees } from "../AmountCoffees/intex";

export function CoffeeList() {
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
                  <p className={styles.description}>
                    {coffee.description}
                  </p>

                  <div className={styles.buy}>
                    <div className={styles.value}>
                      R$ <strong>9,90</strong>
                    </div>

                    <div className={styles.buyActions}>
                      <AmountCoffees />
                      <FaShoppingCart
                        size={28}
                        className={styles.buyIconButton}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
  )
}