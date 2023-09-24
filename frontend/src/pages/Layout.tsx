import { Outlet } from "react-router";
import { Header } from "../components/1_header/Header";
import Footer from "../components/10_footer/Footer";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
