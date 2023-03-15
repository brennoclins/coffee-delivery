import { Header } from "./components/Header";

import styles from "./app.module.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <Home />        
      </div>
    </main>
  );
}

export default App;
