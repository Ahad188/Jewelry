import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Page/Home/Home";
import AllProduct from "../Components/Page/AllProduct/AllProduct";
import ErrorPage from "../Components/Page/ErrorPage/ErrorPage";

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
               }
          ]
     }
])
export default router;