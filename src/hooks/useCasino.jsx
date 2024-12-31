import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";
/* Get casino */
const useCasino = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["casinoWolf"],
    queryFn: async () => {
      const res = await AxiosInstance.post(API.slotsWolf, {
        gameList: "All",
        product: "All",
        isHome: true,
      });
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useCasino;
