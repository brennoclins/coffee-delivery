import { Route, Routes } from "react-router-dom";
import { CustomerLayout } from "./layouts/CustomerLayout";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Success } from "./pages/Success";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CustomerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
