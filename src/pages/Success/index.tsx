import { BsClock, BsCurrencyDollar } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

import styles from "./success.module.css";

export function Success() {
  return (
    <section className={styles.success}>
      <div className={styles.successTitle}>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section className={styles.orderInformation}>
        <div className={styles.orderInformationBox}>
          <div className={styles.orderInformationLocal}>
           <img src="/page-success/local.svg" alt="Icone de Localização" />
            <span>
              <p>
                Entrega em <strong>Rua do Bom Fim, 322</strong>
              </p>
              <p>Carmo - Olinda, PE</p>
            </span>
          </div>

          <div className={styles.orderInformationTime}>
            <BsClock size={36} />
            <span>
              <p>Previsão de entrega</p>
              <strong>20min - 30min</strong>
            </span>
          </div>

          <div className={styles.orderInformationPayment}>
            <BsCurrencyDollar size={36} />
            <span>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Cédito</strong>
            </span>
          </div>
        </div>

        <img
          src="/page-success/Illustration.svg"
          alt="Desenho de um entregador em uma moto com um bau contendo as entregas"
        />
      </section>
    </section>
  );
}
