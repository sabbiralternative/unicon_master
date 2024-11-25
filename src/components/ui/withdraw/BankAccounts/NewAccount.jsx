import { useEffect, useState } from "react";
import handleRandomToken from "../../../../utils/handleRandomToken";
import { settings } from "../../../../api";
import handleEncryptData from "../../../../utils/handleEncryptData";
import { useBankMutation } from "../../../../redux/features/payment/payment.api";
import toast from "react-hot-toast";
import useGetAllBankAccount from "../../../../hooks/useGetAllBankAccount";

const NewAccount = ({ setTabs }) => {
  const { refetchBankAccounts } = useGetAllBankAccount();
  const [addNewBank] = useBankMutation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    ifsc: "",
    accountNumber: "",
    confirmAccountNumber: "",
    upiId: "",
  });

  /* Handle add bank function */
  const handleAddBank = async (e) => {
    e.preventDefault();
    if (bankDetails.accountNumber !== bankDetails.confirmAccountNumber) {
      return toast.error("Account number not matched!");
    }
    /* generating random token for post data */
    const generatedToken = handleRandomToken();
    const bankData = {
      accountName: bankDetails.accountName,
      ifsc: bankDetails.ifsc,
      upiId: bankDetails.upiId,
      accountNumber: bankDetails.accountNumber,
      type: "addBankAccount",
      token: generatedToken,
      site: settings.siteUrl,
    };
    const encryptedData = handleEncryptData(bankData);
    const res = await addNewBank(encryptedData).unwrap();

    if (res?.success) {
      setBankDetails({
        accountName: "",
        ifsc: "",
        accountNumber: "",
        confirmAccountNumber: "",
      });
      toast.success(res?.result?.message);
      setTabs("oldAccount");
      refetchBankAccounts();
    } else {
      toast.error(res?.result?.message);
    }
  };

  const validateForm = (bankDetails) => {
    const isaccountNameFilled = bankDetails.accountName.trim() !== "";
    const isaccountNumberFilled = bankDetails.accountNumber.trim() !== "";
    const isIfscFilled = bankDetails.ifsc.trim() !== "";
    const isFormValid =
      isaccountNameFilled && isIfscFilled && isaccountNumberFilled;
    setIsFormValid(isFormValid);
  };

  useEffect(() => {
    validateForm(bankDetails);
  }, [bankDetails]);
  return (
    <form
      onSubmit={handleAddBank}
      className="w-full flex flex-col items-start justify-start gap-y-4"
      data-gtm-form-interact-id="0"
    >
      <div className="rounded-lg bg-bg_Quaternary py-2 px-3.5 pb-5 flex flex-col items-start justify-start w-full gap-y-2">
        <div className="w-full relative h-full">
          <div className="flex flex-col w-full">
            <div className="ml-1 text-sm">
              UPI ID<span className="text-text_Primary"></span>
            </div>
            <div className="relative">
              <input
                onChange={(e) => {
                  setBankDetails({
                    ...bankDetails,
                    upiId: e.target.value,
                  });
                }}
                placeholder="Enter UPI Id"
                className="block w-full focus:outline-none py-2  border rounded-lg pl-4 pr-4 ml-0 mr-0"
                type="text"
                value={bankDetails.upiId}
              />
            </div>
            <div className="text-xs ml-1 text-text_Primary"></div>
          </div>
        </div>
        <div className="w-full relative h-full">
          <div className="flex flex-col w-full">
            <div className="ml-1 text-sm">
              IFSC Code <span className="text-text_Primary">*</span>
            </div>
            <div className="relative">
              <input
                onChange={(e) => {
                  setBankDetails({
                    ...bankDetails,
                    ifsc: e.target.value,
                  });
                }}
                id="ifsc"
                label="IFSC Code"
                required=""
                placeholder="Enter IFSC Code"
                className="block w-full focus:outline-none py-2  border rounded-lg pl-4 pr-4 ml-0 mr-0"
                type="text"
                value={bankDetails.ifsc}
              />
            </div>
            <div className="text-xs ml-1 text-text_Primary"></div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Account No <span className="text-text_Primary">*</span>
          </div>
          <div className="relative">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  accountNumber: e.target.value,
                });
              }}
              id="accountNo"
              label="Account No"
              required=""
              placeholder="Enter Account Number"
              className="block w-full focus:outline-none py-2  border rounded-lg pl-4 pr-4 ml-0 mr-0"
              type="text"
              value={bankDetails.accountNumber}
            />
          </div>
          <div className="text-xs ml-1 text-text_Primary"></div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Confirm Account No
            <span className="text-text_Primary">*</span>
          </div>
          <div className="relative">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  confirmAccountNumber: e.target.value,
                });
              }}
              label="Confirm Account No"
              required=""
              id="confirmAccountNo"
              placeholder="Re-enter Account Number"
              className="block w-full focus:outline-none py-2  border rounded-lg pl-4 pr-4 ml-0 mr-0"
              type="text"
              value={bankDetails.confirmAccountNumber}
            />
          </div>
          <div className="text-xs ml-1 text-text_Primary"></div>
        </div>
        <div className="flex flex-col w-full">
          <div className="ml-1 text-sm">
            Account Name <span className="text-text_Primary">*</span>
          </div>
          <div className="relative">
            <input
              onChange={(e) => {
                setBankDetails({
                  ...bankDetails,
                  accountName: e.target.value,
                });
              }}
              id="accountName"
              label="Account Name"
              required=""
              placeholder="Enter Account Name"
              className="block w-full focus:outline-none py-2  border rounded-lg pl-4 pr-4 ml-0 mr-0"
              type="text"
              value={bankDetails.accountName}
            />
          </div>
          <div className="text-xs ml-1 text-text_Primary"></div>
        </div>
      </div>

      <div className="flex items-start justify-center gap-x-2">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full bg-bg_Quinary"
            htmlFor="blue"
          >
            <input
              className="before:content[''] before:bg-bg_Secondary3 rounded-md peer relative cursor-pointer appearance-none border border-success transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-success checked:bg-bg_Success hover:before:opacity-10 h-5 w-5"
              id="blue"
              type="checkbox"
              defaultChecked
            />
            <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-text_Quaternary opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
        <span className="text-sm text-textColor font-lato font-[400] leading-5">
          I have read and agree with
          <span className="text-text_Primary underline text-sm font-lato font-[400] leading-4 cursor-pointer">
            the terms of payment and withdrawal policy.
          </span>
        </span>
      </div>
      <div className="w-full text-center">
        <button
          type="submit"
          disabled={!isFormValid}
          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary w-full text-text_Quaternary h-10 text-base shadow-lg font-lato rounded-md font-[900] leading-4 disabled:opacity-70 flex gap-x-1 items-center justify-center cursor-pointer"
        >
          <span>SUBMIT</span>
        </button>
      </div>
    </form>
  );
};

export default NewAccount;
