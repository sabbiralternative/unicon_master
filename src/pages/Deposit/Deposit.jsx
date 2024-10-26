import { useState } from "react";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import ChooseAmount from "../../components/ui/deposit/ChooseAmount";
import PaymentMethod from "../../components/ui/deposit/PaymentMethod";
import PaymentProof from "../../components/ui/deposit/PaymentProof";
import { useSelector } from "react-redux";

const Deposit = () => {
  const { showAppPopUp } = useSelector((state) => state.state);
  const [amount, setAmount] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState(false);
  const [uploadTransaction, setUploadTransaction] = useState(false);
  const [paymentId, setPaymentId] = useState("");
  return (
    <div
      className={`flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 ${
        showAppPopUp ? "pt-[155px]" : "pt-[85px]"
      }`}
    >
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        {/* step 1 */}
        {!paymentMethods && !uploadTransaction && (
          <ChooseAmount
            amount={amount}
            setAmount={setAmount}
            setPaymentMethods={setPaymentMethods}
          />
        )}

        {/* step 2 */}
        {paymentMethods && (
          <PaymentMethod
            setUploadTransaction={setUploadTransaction}
            setPaymentMethods={setPaymentMethods}
            setPaymentId={setPaymentId}
            amount={amount}
          />
        )}
        {/* step 3 */}
        {uploadTransaction && (
          <PaymentProof paymentId={paymentId} amount={amount} />
        )}

        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default Deposit;
