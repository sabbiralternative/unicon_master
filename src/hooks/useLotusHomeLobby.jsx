import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useLotusHomeLobby = () => {
  const token = useSelector(userToken);
  const { data: lotusLobby, isLoading } = useQuery({
    queryKey: [`lotusHomeLobby`],
    queryFn: async () => {
      const res = await axios.post(`${API.lotusHomeLobby}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res?.data;
    },
    refetchOnWindowFocus: false,
  });
  return { lotusLobby, isLoading };
};

export default useLotusHomeLobby;
