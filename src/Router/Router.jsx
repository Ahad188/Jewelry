import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Page/Home/Home";
import AllProduct from "../Components/Page/AllProduct/AllProduct";
import ErrorPage from "../Components/Page/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login"; 
import Singup from "../Components/Singup/Singup";
import Private from "./Private";
import Dashboard from "../Layout/Dashboard";
import Dboard from "../Components/Page/Dboard/DbordHome/Dboard";
import Mycart from "../Components/Page/Dboard/Mycart/Mycart";
import Payment from "../Components/Page/Dboard/Payment/Payment";
import Payhistory from "../Components/Page/Dboard/PayHis/Payhistory";
import AdminHome from "../Components/Page/Dboard/AdminD/AdminHome/AdminHome";
 
import Addproduct from "../Components/Page/Dboard/AdminD/AddProudct/Addproduct";
import ManegPro from "../Components/Page/Dboard/AdminD/ManegPro/ManegPro";
import Allurers from "../Components/Page/Dboard/AdminD/Allurers/Allurers";
import AdminRoute from "./AdminRoute";
 
 
 
 

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
                    element:<Private><AllProduct></AllProduct></Private>
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
     },
     {
          path:'/dashboard',
          element:<Private><Dashboard/></Private>,
          children:[
               {
                    path:'/dashboard/d-board',
                    element:<Dboard/>
               },
               {
                    path:'/dashboard/my-cart',
                    element:<Mycart/>
               },
               {
                    path:'/dashboard/payment',
                    element:<Payment/>
               },
               {
                    path:'/dashboard/history',
                    element:<Payhistory/>
               },
               // admin route
               {
                    path:'/dashboard/adminHome',
                    element: <AdminHome/> 
               },
               {
                    path:'/dashboard/addProduct',
                    element: <Addproduct/> 
               },
               {
                    path:'/dashboard/manejproduct',
                    element: <ManegPro/> 
               },
               {
                    path:'/dashboard/allurers',
                    element:  <AdminRoute><Allurers/></AdminRoute>  
               }
          ]
     }
])
export default router;