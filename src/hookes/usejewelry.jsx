import { useQuery } from "@tanstack/react-query"

 

const usejewelry = ()=>{
     const {data:products=[],  isLoading: loading,refetch  } = useQuery({
          queryKey: ['product'],
          queryFn : async ()=> {
               const res = await fetch('http://localhost:5000/product')
               return res.json()
          }
     })
     return [ products, loading, refetch ];
}
export default usejewelry;