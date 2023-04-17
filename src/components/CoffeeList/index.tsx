import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/coffeContext";

import { CoffeeCard } from "./CoffeeCard";

import styles from "./coffeeList.module.css";

export function CoffeeList() {
  const { coffeeOnTheCart, coffeesList, selectCoffeeFromTheList, orderIsFinished, newOrder } = useContext(CoffeeContext);
 
  useEffect(() => {
    if (orderIsFinished) {
      newOrder()
    }
  },[])

  if (!orderIsFinished && coffeeOnTheCart.length > 0) {
    const idCoffee = coffeeOnTheCart[coffeeOnTheCart.length -1].id
    const amountCoffee = coffeeOnTheCart[coffeeOnTheCart.length -1].amount
    selectCoffeeFromTheList(idCoffee, amountCoffee)
            
    // setCoffeesList(preState => [
    //   ...preState,
    //   updateCoffeeIsSelected
    // ])
  }
 
  return (
    <section className={styles.coffeList}>
      <h2>Nossos Cafés</h2>
      <div className={styles.list}>
        {coffeesList.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              imageURL={coffee.imageURL}
              description={coffee.description}
              amount={coffee.amount}
              tags={coffee.tags}
              value={coffee.value}
              isCoffeeSelected={coffee.isSelected}
            />
          );
        })}
      </div>
    </section>
  );
}
