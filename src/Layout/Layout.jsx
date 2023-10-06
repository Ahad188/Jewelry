import { Outlet } from "react-router-dom"
import Navbar from "../Components/Share/Navbar/Navbar"
import Footer from "../Components/Share/Footer/Footer"

 

const Layout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>

    
    </>
  )
}

export default Layout