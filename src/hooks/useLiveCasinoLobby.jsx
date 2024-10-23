import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useLiveCasinoLobby = (casinoType) => {
  const token = useSelector(userToken);
  const {
    data,
    refetch: refetchLiveCasinoLobby,
    isLoading,
  } = useQuery({
    queryKey: [`liveCasinoLobby/${casinoType}`],
    queryFn: async () => {
      const res = await axios.post(`${API.liveCasinoLobby}/${casinoType}/ALL`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res?.data?.gameList;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasinoLobby, isLoading };
};

export default useLiveCasinoLobby;
