import logo from '../../../assets/logo/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FaCartPlus} from "react-icons/fa";
 
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useCart from '../../../hookes/useCart';
 

const Navbar = () => {
     const navigate = useNavigate()
     const {user,logOut} = useContext(AuthContext)
     const [cart] = useCart()
     const handelLogout=()=>{
          logOut()
          .then(
               navigate('/login')
          )
         .catch(error => console.log(error));
     }

     const navOptions = <>
     <li><Link className="text-xl" to="/">Home</Link></li>
    <li><Link className="text-xl" to="/all-product">All-Jewelry</Link></li>
    {
     user ?  <li><Link className="text-xl" to="/dashboard">Dashboard</Link></li> :  <></>
    }
     
    <li>
        <Link to="/dashboard/my-cart" className="text-xl">
            
                <div className="badge bg-[#c7dfdf]">+{cart?.length || 0} <FaCartPlus/></div>
           
        </Link>
    </li>
     
    {
     user?
     <span className="flex text-xl justify-between items-center">{user?.displayName}
     <img className="h-7 w-7 mt-2 rounded-full" src={user?.photoURL} alt="" />
     <li><button onClick={ handelLogout} className="text-xl" to="/login">LogOut</button></li> 
     </span>
     :
     <li><Link className="text-xl" to="/login">Login</Link></li> 
    }
     
   
    
    
     
</>
  return (
    
     <div className="navbar mx-auto font-bold  bg-opacity-30 max-w-screen-xl bg-black text-[#e8ecef]">
     <div className="navbar-start">
         <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </label>
             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                 {navOptions}
             </ul>
         </div>
         <a className="btn btn-ghost normal-case text-xl"> 
         <img src={logo} className="h-10 w-10 rounded-full" alt="" />
          
         </a>
     </div>
     <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
             {navOptions}
         </ul>
     </div>
     <div className="navbar-end">
         <Link to='/classes' className="btn"> Blog</Link>
     </div>
 </div>
  )
}

export default Navbar