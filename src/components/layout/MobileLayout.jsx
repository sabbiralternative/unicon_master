import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const MobileLayout = () => {
  // overflow-x-hidden overflow-y-auto
  const { pathname } = useLocation();
  return (
    <>
      <div className="w-full flex flex-col app-bg h-[100%]">
        {!pathname.includes("/casino") && <Header />}
        <Outlet />
        {!pathname.includes("/casino") && <Footer />}
      </div>
    </>
  );
};

export default MobileLayout;
