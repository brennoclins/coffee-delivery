import styles from "./home.module.css"

import { INTRO_ITEMS } from "../../apiFake";
import { CoffeeList } from "../../components/CoffeeList";

export function Home() {
  return (
    <>
    <section className={styles.intro}>
          <div className={styles.introTextContainer}>
            <div className={styles.title}>
              <strong>
                Encontre o café perfeito para qualquer hora do dia
              </strong>

              <p>
                Com o Coffe Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className={styles.items}>
              {INTRO_ITEMS.map((item) => {
                return (
                  <span key={item.text} className={styles.item}>
                    <img src={item.icon} alt="" />
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>

          <div className={styles.introImage}>
            <img
              src="/intro.svg"
              alt="Imagem de um copo de café branco com preto, com algus grãos de café al lado e um fundo amarelo com designe de lua"
            />
          </div>
        </section>

        <CoffeeList />
    </>
  )
}