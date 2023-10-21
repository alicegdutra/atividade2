import { HeaderComponent } from "./shared/components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <section className="body">
      <HeaderComponent />

      <Outlet />
    </section>
  );
};