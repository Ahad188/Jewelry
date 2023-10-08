import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { Dna } from "react-loader-spinner";

const Private = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return   <div className="radial-progress" style={{"--value":70}}>70%</div>
    
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{from:location}} replace ></Navigate>;
};

export default Private;
