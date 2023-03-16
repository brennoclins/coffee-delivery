import { BsCreditCard2Back } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

import { AmountCoffees } from "../../components/AmountCoffees/intex";

import styles from "./checkout.module.css";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/coffeContext";

export function Checkout() {
  const { coffeeInTheCart, removeItemInCart, updateItemsInCart, totalValueOfItemsInCart, deliveryValue } =
    useContext(CoffeeContext);
  
 
  function removerCoffeeToCart(id: string) {
    removeItemInCart(id);
  }

  // function updatesTheAmountOfCoffeeInTheCart(
  //   id: string,
  //   name: string,
  //   amount: number,
  //   value: number,
  //   imageURL: string
  // ) {
  //   if (amount > 0) {
  //     updateItemsInCart({
  //       id,
  //       name,
  //       amount,
  //       value,
  //       imageURL,
  //     });
  //   }
  // }

  return (
    <main className={styles.checkout}>
      <section className={styles.address}>
        <h1 className={styles.addressTitle}>Complete seu pedido</h1>

        <form>
          <div className={styles.cardAddress}>
            <div>
              <h3>Endereço de entrega</h3>
              <p>informe o endereço onde deseja receber seu pedido</p>
            </div>

            <div className={styles.addressInputs}>
              <input type="text" placeholder="CEP" name="cep" />
              <input type="text" placeholder="Nome da rua" name="address" />

              <div>
                <input
                  className="w-1/12"
                  type="text"
                  placeholder="Número"
                  name="number"
                />
                <input className="w-5/12" type="text" placeholder="Bairro" />
                <input className="w-5/12" type="text" placeholder="Cidade" />
                <input
                  className="w-1/12"
                  type="text"
                  placeholder="UF"
                  defaultValue={"PE"}
                />
              </div>

              <div className={styles.addressOBS}>
                <h2>Observações do cliente</h2>
                <textarea
                  className="w-full"
                  name="obs"
                  rows={5}
                  placeholder="Observações, ponto de referencia, informações para o momento da entrega, etc."
                ></textarea>
              </div>
            </div>
          </div>

          <div className={styles.cardPayment}>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div className={styles.formOfPayment}>
              <button>
                <BsCreditCard2Back />
                CARTÃO
              </button>
              <button>
                <MdPix />
                PIX
              </button>
              <button>
                <GiMoneyStack />
                DINHEIRO
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className={styles.orderDetails}>
        <h1 className={styles.orderDetailsTitle}>Cafés selecionados</h1>

        {coffeeInTheCart.map((coffee) => {
          return (
            <section key={coffee.id}>
              <div className={styles.coffeeSelected}>
                <img src={coffee.imageURL} alt={coffee.name} />

                <div className={styles.coffeInfo}>
                  <h3>{coffee.name}</h3>
                  <div>
                    <AmountCoffees amount={coffee.amount} />
                    <button onClick={() => removerCoffeeToCart(coffee.id)}>
                      REMOVER
                    </button>
                  </div>
                </div>

                <strong>R$ {String(coffee.value)}</strong>
              </div>
            </section>
          );
        })}

        <div className={styles.paymentDetails}>
          <div>
            Total de itens <span>R$ {totalValueOfItemsInCart}</span>
          </div>

          <div>
            Entrega <span>R$ {totalValueOfItemsInCart > 0 ? deliveryValue : 0}</span>
          </div>

          <div className={styles.paymentTotal}>
            <strong>TOTAL</strong>
            <strong>R$ {totalValueOfItemsInCart > 0 ? totalValueOfItemsInCart + deliveryValue : 0 }</strong>
          </div>

          <button>CONFIRMAR PEDIDO</button>
        </div>
      </section>
    </main>
  );
}
