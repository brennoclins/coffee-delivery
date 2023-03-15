import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function CustomerLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}