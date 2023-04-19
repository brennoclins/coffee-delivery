import { Link } from "react-router-dom";
import styles from "./notfound.module.css";

export function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFoundImage}>
        <img
          src="/intro.svg"
          alt="imagem com um pode de café preparado para viagem e alguns grãos ao redor com um fundo amarelo"
        />
      </div>

      <h1 className={styles.notFoundTitle}>Ops! Página não encontrada.</h1>
      
      <Link to={"/"} className={styles.notFoundButton}>
        Retornar ao início
      </Link>
    </section>
  );
}
