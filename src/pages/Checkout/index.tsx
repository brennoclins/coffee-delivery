import { BsCreditCard2Back } from "react-icons/bs"
import { MdPix } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi"

import { AmountCoffees } from "../../components/AmountCoffees/intex";

import styles from "./checkout.module.css";

export function Checkout() {
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
                <input className="w-1/12" type="text" placeholder="Número" name="number" />
                <input className="w-5/12" type="text" placeholder="Bairro" />
                <input className="w-5/12" type="text" placeholder="Cidade" />
                <input className="w-1/12" type="text" placeholder="UF" defaultValue={"PE"} />
              </div>

              <div className={styles.addressOBS}>
                <h2>Observações do cliente</h2>
                <textarea className="w-full" name="obs" rows={5} placeholder="Observações, ponto de referencia, informações para o momento da entrega, etc."></textarea>
              </div>
            </div>
          </div>

          <div className={styles.cardPayment}>
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
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

        <div className={styles.coffeeSelected}>
          <img src="/coffes/01-coffee.svg" alt="" />
          
          <div className={styles.coffeInfo}>
            <h3>Expresso Tradicional</h3>
            <div>
              <AmountCoffees />
              <button>REMOVER</button>
            </div>
          </div>
          
          <strong>R$ 9,00</strong>
        </div>
       
        <div className={styles.paymentDetails}>
          <div>
            Total de itens <span>R$ 9,90</span>
          </div>

          <div>Entrega <span>R$ 3,50</span></div>

          <div className={styles.paymentTotal}>
            <strong>TOTAL</strong>
            <strong>R$ 33,20</strong>
          </div>
        
          <button>CONFIRMAR PEDIDO</button>
        </div>

      </section>
    </main>
  );
}
