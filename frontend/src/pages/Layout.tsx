import { Outlet } from "react-router";
import { Header } from "../components/Home/1_header/Header";
import Footer from "../components/Home/6_footer/Footer";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
