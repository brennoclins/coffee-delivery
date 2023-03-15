import { Header } from "./components/Header";

import styles from "./app.module.css";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        {/* <Home />   */}
        <Checkout />
      </div>
    </main>
  );
}

export default App;
