import { BsClock, BsCurrencyDollar } from "react-icons/bs";

import styles from "./success.module.css";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/coffeContext";

export function Success() {
  const { orders, finalizingOrder } = useContext(CoffeeContext);

  const customerRequest = orders[orders.length - 1];
  useEffect(() => {
    finalizingOrder()
  }, [])
    
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
                Entrega em{" "}
                <strong>
                  {customerRequest.deliveryAddress.publicPlace},{" "}
                  {customerRequest.deliveryAddress.number}
                </strong>
              </p>
              <p>
                {customerRequest.deliveryAddress.district}-
                {customerRequest.deliveryAddress.city},{" "}
                {customerRequest.deliveryAddress.state}
              </p>
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
              <strong>{customerRequest.formOfPayment}</strong>
            </span>
          </div>
        </div>

        <img
          src="/page-success/Illustration.svg"
          alt="Desenho de um entregador em uma moto com um bau contendo as entregas"
        />
      </section>

      <section className={styles.orderDetails}>
        <h2 className={styles.orderDetailsTitle}>Detalhes do pedido</h2>
        <div className={styles.orderDetailsContainer}>
          <div className={styles.orderDetailsCode}>
            <h4>Pedido: </h4>
            <strong>{customerRequest.orderId}</strong>
          </div>

          <div className={styles.orderDetailsItems}>
            <h4>Itens do pedido:</h4>
         
          {customerRequest.orderItems.map((item) => {
            return (
              <div key={item.name}>
                <h4>{item.name}</h4>
                <strong>{item.amount} unidades</strong>
              </div>
            );
          })}
          </div>

          <div  className={styles.orderDetailsTotal}>
            <h4>Valor á ser pago:</h4>
            <strong>R$ {customerRequest.totalOrder}</strong>
          </div>
        </div>
      </section>
    </section>
  );
}
