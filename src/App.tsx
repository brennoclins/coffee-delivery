import { Header } from "./components/Header";

import styles from "./app.module.css";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <Home />  
        {/* <Checkout /> */}
        {/* <Success /> */}
      </div>
    </main>
  );
}

export default App;
