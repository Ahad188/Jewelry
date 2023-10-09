import { useContext } from 'react'
import { AuthContext } from '../../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../../hookes/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
     const { user } =  useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: star = {} } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-status");
      return res.data;
    },
  });


  return (
     <div className="w-full h-screen p-5">
     <h2 className="text-3xl text-center my-5"> HI , {user?.displayName} </h2>

     <div className="stats shadow ">
      

       <div className="stat">
         <div className="stat-figure text-secondary">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="inline-block w-8 h-8 stroke-current"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
             ></path>
           </svg>
         </div>
         <div className="stat-title">New Users</div>
         <div className="stat-value">{star?.user}</div>
         <div className="stat-desc">↗︎ 400 (22%)</div>
       </div>

       <div className="stat">
         <div className="stat-figure text-secondary">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="inline-block w-8 h-8 stroke-current"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
             ></path>
           </svg>
         </div>
         <div className="stat-title"> Product</div>
         <div className="stat-value">{star?.product}</div>
         <div className="stat-desc">↘︎ 90 (14%)</div>
       </div>
       <div className="stat">
         <div className="stat-figure text-secondary">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="inline-block w-8 h-8 stroke-current"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
             ></path>
           </svg>
         </div>
         <div className="stat-title"> Order</div>
         <div className="stat-value">{star?.order}</div>
         <div className="stat-desc">↘︎ 90 (14%)</div>
       </div>
       <div className="stat">
         <div className="stat-figure text-secondary">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="inline-block w-8 h-8 stroke-current"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
             ></path>
           </svg>
         </div>
         <div className="stat-title">Revenue</div>
         <div className="stat-value">${star?.revenue}</div>
         <div className="stat-desc">Jan 1st - Feb 1st</div>
       </div>
     </div>

      

   </div>
  )
}

export default AdminHome