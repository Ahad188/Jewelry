import { Dna } from  'react-loader-spinner'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
 
 const PrivateRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation();
     console.log(location);
     console.log(loading);
     if(loading){
          return  <div className=' h-[100vh]
          flex 
          flex-col 
          justify-center 
          items-center '><Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /></div>
     }
     if(user){
          return  children;
     }

   return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
 }
 
 export default PrivateRoute












 
