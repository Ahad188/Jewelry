import { FaGoogle } from "react-icons/fa";
 
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
   

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handelGoogleSingIn = () => {
    
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
