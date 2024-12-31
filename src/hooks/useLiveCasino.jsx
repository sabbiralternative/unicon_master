import { useQuery } from "@tanstack/react-query";

import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";
/* live casino api */
const useLiveCasino = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoWolf"],

    queryFn: async () => {
      const res = await AxiosInstance.post(API.liveCasinoWolf, {
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

export default useLiveCasino;
