import { useForm } from "react-hook-form";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Singup = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("userProfile is update");
          const saveUser = { name: data.name, email: data.email };
          fetch("https://jewelry-server-q5rp0hk9y-ahad188.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center text-4xl my-5"> singup </h2>
        <div className="w-[450px] mx-auto border border-[#2e9cf0] border-r-8 border-b-8 p-10 my-20">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl">Name:</span>
            </label>
            <input
              type="name"
              {...register("name")}
              placeholder="Name"
              className="input input-bordered  max-w-xs"
            />
          </div>
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
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered w-80"
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn bg-[#2e9cf0] w-80" value="Login" />
          </div>

          <p>
            I have a account ? Please{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>

          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Singup;
