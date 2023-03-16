import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import styles from "./app.module.css";
import { CoffeeContextProvider } from "./contexts/coffeContext";

function App() {
  return (
    <CoffeeContextProvider>
    <main className={styles.main}>
      <div className={styles.container}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </main>
    </CoffeeContextProvider>    
  );
}

export default App;
