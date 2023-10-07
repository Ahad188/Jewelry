import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hookes/useCart";

 
 
 const Card = ({item}) => {
     const { name, photo, price, rating, category, _id } = item;
     const { user } = useContext(AuthContext);
      
     const navigate = useNavigate();
     const location = useLocation();
     const [, refetch] = useCart();

     const handelAddtoCard=(item)=>{
          if(user && user.email){
               console.log(user);
          const itemCart = { classId: _id, photo,   price, email: user?.email };
          fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(itemCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: " class added my class",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
          }
          else {
               Swal.fire({
                 title: "Please login to Join the class",
                 icon: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#3085d6",
                 cancelButtonColor: "#d33",
                 confirmButtonText: "Login now!",
               }).then((result) => {
                 if (result.isConfirmed) {
                   navigate("/login", { state: { from: location } });
                 }
               });
             }
     }


   return (
     <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="h-[200px]" alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-orange-400">Rating:{ rating}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handelAddtoCard(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
   )
 }
 
 export default Card