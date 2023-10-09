import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSing } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handelGoogleSingIn = () => {
    googleSing()
      .then((result) => {
        const gUser = result.user;
        console.log(gUser);
        const saveUser = { name: gUser.displayName, email: gUser.email };
        fetch("https://jewelry-server-q5rp0hk9y-ahad188.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .then((err) => console.log(err));
  };
  return (
    <div className="text-center my-4">
      <div className="divider"></div>
      <button onClick={handelGoogleSingIn} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
