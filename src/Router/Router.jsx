import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Page/Home/Home";

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          children:[
               {
                    path:'/',
                    element:<Home/>
               }
          ]
     }
])
export default router;