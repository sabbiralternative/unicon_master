import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";

const useLotusHomeLobby = () => {
  const { data: lotusLobby, isLoading } = useQuery({
    queryKey: [`lotusHomeLobby`],
    queryFn: async () => {
      const res = await AxiosInstance.post(`${API.lotusHomeLobby}`);

      return res?.data;
    },
    refetchOnWindowFocus: false,
  });
  return { lotusLobby, isLoading };
};

export default useLotusHomeLobby;
