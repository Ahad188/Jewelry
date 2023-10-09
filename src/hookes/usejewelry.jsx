import { useQuery } from "@tanstack/react-query";

const usejewelry = () => {
  const {
    refetch,
    data: products = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("https://jewelry-server-q5rp0hk9y-ahad188.vercel.app/product");
      return res.json();
    },
  });
  return [products, loading, refetch];
};
export default usejewelry;
