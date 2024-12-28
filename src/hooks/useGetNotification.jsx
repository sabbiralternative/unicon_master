import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { AxiosSecure } from "../lib/AxiosSecure";

const useGetNotification = () => {
  const {
    data: notification = [],
    refetch: refetchNotification,
    isFetching: isFetchingNotification,
    isFetched,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      try {
        const generatedToken = handleRandomToken();
        const encryptedData = handleEncryptData({
          token: generatedToken,
          site: settings.siteUrl,
        });
        const { data } = await AxiosSecure.post(
          `${API.notification}`,
          encryptedData
        );

        if (data.success) {
          return data?.result;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime: 0,
    refetchInterval: 60000,
  });

  return {
    notification,
    refetchNotification,
    isFetchingNotification,
    isFetched,
  };
};

export default useGetNotification;
