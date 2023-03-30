import { ReactNode, useState } from "react"

import styles from "./buttonFormOfPayment.module.css"

interface ButtonFormOfPaymentProps {
  children: ReactNode
}
export function ButtonFormOfPayment({children}: ButtonFormOfPaymentProps) {
  const [paymentSelected, setPaymentSelected] = useState(false)
  
  function tooglePaymentSelected() {
    setPaymentSelected(!paymentSelected)
  }
  return (
    <span onClick={tooglePaymentSelected} className={paymentSelected ? `${styles.formOfPaymentButton} ${styles.formOfPaymentButtonSelected}` : styles.formOfPaymentButton}>
      {children}
    </span>
  )
}