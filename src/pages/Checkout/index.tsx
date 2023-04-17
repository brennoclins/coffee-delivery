import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

import { AmountCoffees } from "../../components/AmountCoffees";

import styles from "./checkout.module.css";
import { CoffeeContext } from "../../contexts/coffeContext";
import { useNavigate } from "react-router-dom";

const newOrderFormeValidationSchema = zod.object({
  zipCode: zod.string().min(8, "Informe o CEP."),
  publicPlace: zod.string(),
  number: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
  observation: zod.string(),
  formOfPayment: zod.string(),
  // deliveryValue: zod.number(),
  // totalOrder: zod.number(),
  // orderItens: zod.object({
  //   name: zod.string(),
  //   amount: zod.number(),
  //   totalAmountPerItem: zod.number(),
  // })
});

type NewOrderFormData = zod.infer<typeof newOrderFormeValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newOrderFormeValidationSchema),
    defaultValues: {
      zipCode: "",
      publicPlace: "",
      number: "",
      district: "",
      city: "",
      state: "",
      observation: "",
      formOfPayment: "card",
      // deliveryValue: 3.5,
      // totalOrder: 0,
      // orderItens: {
      //   name: "",
      //   amount: 0,
      //   totalAmountPerItem: 0
      // }
    },
  });

  const {
    coffeeOnTheCart,
    removeCoffeeFromCart,
    totalValueOfItemsInCart,
    deliveryValue,
    createNewOrder,
  } = useContext(CoffeeContext);

  function removerCoffeeToCart(id: string) {
    removeCoffeeFromCart(id);
  }

  function handleCreateNewOrder({
    zipCode,
    publicPlace,
    number,
    district,
    city,
    state,
    observation,
    formOfPayment,
  }: NewOrderFormData) {
    createNewOrder({
      zipCode,
      publicPlace,
      number,
      district,
      city,
      state,
      observation,
      formOfPayment,
    });
    // reset();
    navigate("/success");
  }

  const filledZipCode = watch("zipCode");
  const isSubmitDisabled = !filledZipCode;

  return (
    <main className={styles.checkout}>
      <form
        className={styles.checkoutForm}
        onSubmit={handleSubmit(handleCreateNewOrder)}
      >
        <section className={styles.address}>
          <h1 className={styles.addressTitle}>Complete seu pedido</h1>
          <div className={styles.cardAddress}>
            <div>
              <h3>Endereço de entrega</h3>
              <p>informe o endereço onde deseja receber seu pedido</p>
            </div>

            <div className={styles.addressInputs}>
              <input
                type="text"
                placeholder="CEP"
                {...register("zipCode")}
                required
              />
              <input
                type="text"
                placeholder="Nome da rua"
                {...register("publicPlace")}
              />

              <div>
                <input
                  className="md:w-2/12"
                  type="text"
                  placeholder="Número"
                  {...register("number")}
                />
                <input
                  className="md:w-5/12"
                  type="text"
                  placeholder="Bairro"
                  {...register("district")}
                />
                <input
                  className="md:w-5/12"
                  type="text"
                  placeholder="Cidade"
                  {...register("city")}
                />
                <input
                  className="md:w-1/12"
                  type="text"
                  defaultValue={"PE"}
                  placeholder="UF"
                  {...register("state")}
                />
              </div>
  
              <h2 className="mt-2">Observações do cliente</h2>
              <textarea
                className="w-full"
                rows={5}
                placeholder="Observações, ponto de referencia, informações para o momento da entrega, etc."
                {...register("observation")}
              ></textarea>
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
              <input
                type="radio"
                {...register("formOfPayment")}
                id="card"
                value={"CARTÃO"}
                defaultChecked
              />
              <label htmlFor="card">
                <BsCreditCard2Back />
                CARTÃO
              </label>

              <input
                type="radio"
                {...register("formOfPayment")}
                id="pix"
                value={"PIX"}
              />
              <label htmlFor="pix">
                <MdPix />
                PIX
              </label>

              <input
                type="radio"
                {...register("formOfPayment")}
                id="money"
                value={"DINHEIRO"}
              />
              <label htmlFor="money">
                <GiMoneyStack />
                DINHEIRO
              </label>
            </div>
          </div>
        </section>

        <section className={styles.orderDetails}>
          <h1 className={styles.orderDetailsTitle}>Cafés selecionados</h1>

          {coffeeOnTheCart.map((coffee) => {
            return (
              <section key={coffee.id}>
                <div className={styles.coffeeSelected}>
                  <img src={coffee.imageURL} alt={coffee.name} />

                  <div className={styles.coffeInfo}>
                    <h3>{coffee.name}</h3>
                    <div>
                      <AmountCoffees
                        amount={coffee.amount}
                        coffeeId={coffee.id}
                      />
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
              Entrega{" "}
              <span>R$ {totalValueOfItemsInCart > 0 ? deliveryValue : 0}</span>
            </div>

            <div className={styles.paymentTotal}>
              <strong>TOTAL</strong>
              <strong>
                R${" "}
                {totalValueOfItemsInCart > 0
                  ? totalValueOfItemsInCart + deliveryValue
                  : 0}
              </strong>
            </div>

            <button
              className={styles.paymentDetailsSubmitButton}
              disabled={isSubmitDisabled}
              type="submit"
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
