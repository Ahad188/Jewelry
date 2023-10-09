import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hookes/useAxiosSecure";
import usejewelry from "../../../../../hookes/usejewelry"
import { FaTrashAlt } from "react-icons/fa";
 

const ManegPro = () => {
     const [products,refetch] = usejewelry();
     const [axiosSecure] = useAxiosSecure();

     const handleDelete = (item)=>{
          console.log(item);
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
           }).then((result) => {
               if (result.isConfirmed) {
   
                   axiosSecure.delete(`/product/${item._id}`)
                       .then(res => {
                           console.log('deleted res', res.data);
                           if(res.data.deletedCount > 0) {
                              refetch()
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                               )
                           }
                       })
   
               }
           })
     }

  return (
     <div className="w-full h-[100vh]">
     
     <div className="md:overflow-y-scroll w-full h-[600px]">
         <table className="table w-full">
             {/* head */}
             <thead className=" ">
                 <tr className="text-xl">
                     <th>#</th>
                     <th>Item</th>
                     <th>Category</th>
                     <th>Price</th>
                     
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     products.map((item, index) => <tr key={item._id}>
                         <td>
                             {index + 1}
                         </td>
                         <td>
                             <div className="flex items-center space-x-3">
                                 <div className="avatar">
                                     <div className="mask mask-squircle w-12 h-12">
                                         <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                     </div>
                                 </div>
                                 <div>
                                     <div className="font-bold">{item.name}</div>
                                 </div>
                             </div>
                         </td>
                         <td>
                             {item.category}
                         </td>
                         <td className="text-center">${item.price}</td>
                          
                         <td>
                             <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                         </td>
                     </tr>)
                 }

             </tbody>
         </table>
     </div>
 </div>
);
}

export default ManegPro