
import './App.css'
import Header from "./components/Header/Header.tsx";
import {Outlet} from "react-router-dom";

function BaseLayout() {


  return (
    <>
        <Header />

        <Outlet />

    </>
  )
}

export default BaseLayout
