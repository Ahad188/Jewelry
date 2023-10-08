import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

 

const UseHistory = () => {
     const { user, loading } = useContext(AuthContext);

     //     const token = localStorage.getItem('Token');
   
     const [axiosSecure] = useAxiosSecure();
   
     const { refetch, data: history = [] } = useQuery({
       queryKey: ["history", user?.email],
       enabled: !loading,
        
       queryFn: async () => {
         const res = await axiosSecure(`/history?email=${user?.email}`);
         console.log(res);
         return res.data;
       },
     });
   
     return [history, refetch];
}

export default UseHistory