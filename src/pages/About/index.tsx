import { Link } from "react-router-dom";

import styles from "./about.module.css";

export function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.aboutTitle}>Coffee Delivery</h1>
      <div className={styles.aboutDescription}>
        <p>
          Applicativo para gerenciar um carrinho de compras de uma cafeteria,
          funcionalidades:
        </p>

        <ul className={styles.aboutDescriptionList}>
          <li>Listagem de cafés disponíveis para compra</li>
          <li>Adicionar uma quantidade específicas de itens no carrinho</li>
          <li>Aumentar ou remover a quantidade de itens no carrinho</li>
          <li>Formulário para cadastrar endereço de entrega</li>
          <li>Ao finalizar compra, exibe uma tela de sucesso com detales da compra</li>
        </ul>
      </div>

      <div className={styles.aboutTechs}>
        <h2 className={styles.aboutTechsTitle}>TECHS and LIBS</h2>

        <ul className={styles.aboutTechsList}>
          <li>
            <Link to="https://vitejs.dev/">Vite</Link>
          </li>
          <li>
            <Link to="https://tailwindcss.com/">TailwindCSS</Link>
          </li>
          <li>
            <Link to="https://reactrouter.com/en/main">react-router-dom</Link>
          </li>
          <li>
            <Link to="https://react-hook-form.com/">react-hook-form</Link>
          </li>
          <li>
            <Link to="https://github.com/react-hook-form/resolvers">
              @hookform/resovers
            </Link>
          </li>
          <li>
            <Link to="https://zod.dev/">Zod</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
