import Header from "../components/header";
import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
