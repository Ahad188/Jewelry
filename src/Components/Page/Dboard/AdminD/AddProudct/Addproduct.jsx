import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../hookes/useAxiosSecure";
import Swal from "sweetalert2";

 
const img_hosting = import.meta.env.VITE_IMG_HOSTING


const Addproduct = () => {
    
     const [axiosSecure] = useAxiosSecure()
     
     const { register, handleSubmit, } = useForm();
     const hosting_Url = `https://api.imgbb.com/1/upload?key=${img_hosting}`
     

       


     const onSubmit = data => {
          //  console.log(data);
           const formData = new FormData()
               formData.append("image", data.image[0])

           fetch(hosting_Url,{
               method:'POST',
               body: formData,
          }).then(res=>res.json())
           .then(imgResponse=>{
               if(imgResponse.success){
                    const imgURL = imgResponse.data.display_url;
                    const {name, price, category, rating} = data;
                    const newItem = {name, price: parseFloat(price), category, rating:parseFloat(rating), photo:imgURL}
                    
                    console.log(newItem);
                    axiosSecure.post('/product', newItem)
                    .then(data=>{
                         console.log(data.data , "After Posting a New menu item");
                         if(data.data.insertedId){
                              // reset();
                              Swal.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'Item added successfully',
                                  showConfirmButton: false,
                                  timer: 1500
                                })
                          }
                    })
                    
                     
                    
               }
           })
          
     }
  return (
     <div className="w-full px-10">
     
 
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full mb-4">
        <label className="label">
            <span className="label-text font-semibold">Product Name*</span>
        </label>
        <input type="text" placeholder="Product Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full " />
    </div>
    <div className="flex my-4">
        <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Category*</span>
            </label>
            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                <option disabled>Pick One</option>
                <option>Neckless</option>
                <option>Ring</option>
                <option>Earrings</option>
                <option>Bracelet</option>
                <option>Pendant</option>
                
            </select>
        </div>
        <div className="form-control w-full ml-4">
            <label className="label">
                <span className="label-text font-semibold">Price*</span>
            </label>
            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
        </div>
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text"> Rating</span>
        </label>
        <input type="number" {...register("rating", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
    </div>
    <div className="form-control w-full my-4">
        <label className="label">
            <span className="label-text">Item Image*</span>
        </label>
        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
    </div>
    <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
</form>
</div>
  )
}

export default Addproduct