import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
 
import { useState } from "react";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
// import SocialLogin from "../Share/SochailLogin/SocialLogin";


const Login = () => {
     const [show, setShow] = useState(false)
     // const {signIn} = useAuth()
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
     // console.log(data)
      

};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h2  className="text-center text-4xl my-5">Login </h2>
        <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Email :</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="email"
            className="input input-bordered  max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-xl">Password :</span>
          </label>
          <input
            type={show ? 'text' : 'password'}
            {...register("password")}
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <span onClick={()=>setShow(!show) } className="link">Show password</span>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
        </div>
               <dir>
                    <p>I have no account ? Please <Link to='/register' className="link">Register</Link></p>
               </dir>
          <div>
           <SocialLogin></SocialLogin>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
