import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import styles from "./app.module.css";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
