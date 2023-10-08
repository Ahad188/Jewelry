import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../../hookes/useCart";
import Swal from "sweetalert2";

const Mycart = () => {

      const [cart,refetch] = useCart()
    
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handelDelate = (item) => {
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
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
  };
  return (
     <>
       
      <div className="w-full ">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mt-8">
          <h3 className="text-3xl">Total Item: {cart.length}</h3>
          <h3 className="text-3xl"> Price: ${total.toFixed(2)}</h3>
          <Link to="/dashboard/payment">
            <button className="btn bg-[#78c1f8] btn-md">Send to Payment</button>
          </Link>
        </div>
        <div className="divider"></div>
        {/* table */}
        <div className="overflow-x-auto w-full ">
          <table className="table w-full ">
            {/* head */}
            <thead className="text-2xl">
              <tr>
                <th>#</th>
                <th>Image</th>
                 
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-xl ">
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                   
                  <td className="">${item.price}</td>
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
    </>
  )
}

export default Mycart