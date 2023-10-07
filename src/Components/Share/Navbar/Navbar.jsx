import logo from '../../../assets/logo/logo.jpg'
import { Link } from 'react-router-dom'
import { FaCartPlus} from "react-icons/fa";
import './navbar.css'
 

const Navbar = () => {
     // const user = true;
     const navOptions = <>
     <li><Link className="text-xl" to="/">Home</Link></li>
    <li><Link className="text-xl" to="/all-product">All-Jewelry</Link></li>
    
     
    <li>
        <Link to="/dashboard/my-class" className="text-xl">
            
                <div className="badge bg-[#c7dfdf]">+{   0} <FaCartPlus/></div>
           
        </Link>
    </li>
     
    
    <li><Link className="text-xl" to="/login">Login</Link></li>
     
   
    
    
     
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