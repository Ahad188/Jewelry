import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Page/Home/Home";
import AllProduct from "../Components/Page/AllProduct/AllProduct";
import ErrorPage from "../Components/Page/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login"; 
import Singup from "../Components/Singup/Singup";
 
 
 
 

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          errorElement:<ErrorPage/>,
          children:[
               {
                    path:'/',
                    element:<Home/>
               },
               {
                    path:'/all-product',
                    element:<AllProduct></AllProduct>
               },
               {
                    path:'/login',
                    element:<Login/>
               },
                {
                    path:'/sing-up',
                    element: <Singup/>
                }
               
          ]
     }
])
export default router;