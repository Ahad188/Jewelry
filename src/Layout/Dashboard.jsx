import { NavLink, Outlet } from "react-router-dom"
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUser } from 'react-icons/fa';
import useCart from "../hookes/useCart";
  
 
 const Dashboard = () => {
     const isAdmin = false;
     const [cart] = useCart()
   return (
     <div>
          <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    {
               isAdmin ? <>
                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/additem"><FaUtensils/> Add an Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Mange Item</NavLink></li>
                    <li><NavLink to="/"><FaBook></FaBook> Mange Booking(not implemented)</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> All users</NavLink></li>
                
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
               
               </> :
                <>
                <li><NavLink to="/dashboard/d-board"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/all-product"> Our Product</NavLink></li>
                    <li><NavLink to="#">Cart</NavLink></li>
               
               
               </>
             }
    </ul>
  
  </div>
</div>
     </div>
   )
 }
 
 export default Dashboard