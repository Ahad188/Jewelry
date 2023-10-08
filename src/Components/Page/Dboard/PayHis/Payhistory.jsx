// import { useQuery } from "@tanstack/react-query";
 
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseHistory from "../../../../hookes/UseHistory";
 

 
const Payhistory = () => {
     
     // const {data: history=[], refetch} = useQuery({
     //      queryKey:['/dashboard/history'],
     //      queryFn:async()=>{
     //           const res = await fetch('http://localhost:5000/history')
     //           return res.json()
     //      }
     // })
      const [history,refetch] = UseHistory()





     console.log(history);
     const handelDelate = (item)=>{
          console.log(item._id);
           
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/history/${item._id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
            }
          });
          
     }
 
  return (
     <div className="container mx-auto">
          <h3 className="text-center font-bold text-2xl">History : {history.length}</h3>
          <div className="overflow-x-auto w-full ">
          <table className="table w-full ">
            {/* head */}
            <thead className="text-xl">
              <tr>
                <th>#</th>
                <th>TId</th>
                <th>Date</th>
                
                 
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-xl ">
              {history?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  
                   
                  <td className="">{item.transactionId}</td>
                  <td className="">{item.date}</td>
                  
                  <td className="">${item.price}</td>
                  <td className="">{item.quantity}</td>
                  <td className="">{item.status}</td>
                 
                  <td>
                    <button
                      onClick={() => handelDelate(item)}
                      className="btn btn-ghost bg-red-500  text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
     </div>
  )
}

export default Payhistory




// { <div key={his._id}>
//                     <li>{his.email}</li>
//                     <li>{his.price}</li>
//                     <li>{his.quantity}</li>
//                     <li>{his.date}</li>
//                     <li>{his.transactionId}</li>
//                     <li>{his.status}</li>


//                </div>}