import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hookes/useAdmin";
import { BallTriangle } from  'react-loader-spinner'

 

const AdminRoute = ({children}) => {
     const { user, loading } = useContext(AuthContext);
     const [isAdmin, isAdminLoading] = useAdmin();
     const location = useLocation();
 
     if(loading || isAdminLoading){
         return  <BallTriangle
         height={100}
         width={100}
         radius={5}
         color="#4fa94d"
         ariaLabel="ball-triangle-loading"
         wrapperClass={{}}
         wrapperStyle=""
         visible={true}
       />
     }
 
     if (user && isAdmin) {
         return children;
     }
     return <Navigate to="/" state={{from: location}} replace></Navigate>
}

export default AdminRoute