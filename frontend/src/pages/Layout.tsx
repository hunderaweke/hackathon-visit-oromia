import { Outlet } from "react-router"
import { Header } from "../components/1_header/Header"

export const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}
