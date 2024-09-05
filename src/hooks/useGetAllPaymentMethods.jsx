import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useGetAllPaymentMethods = () => {
  const token = useSelector(userToken);
  const { data: paymentMethods, refetch: refetchPaymentMethods } = useQuery({
    queryKey: ["paymentMethods"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const bankData = {
        type: "depositMethods",
        site: settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { paymentMethods, refetchPaymentMethods };
};

export default useGetAllPaymentMethods;
