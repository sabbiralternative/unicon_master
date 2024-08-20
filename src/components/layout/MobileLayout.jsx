import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/desktop/Footer/Footer";
import Header from "../shared/mobile/Header/Header";

const MobileLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full flex flex-col app-bg h-[100dvh] overflow-x-hidden overflow-y-auto">
        <Header />
        <Outlet />
        {!location?.pathname?.includes("game-details") && <Footer />}
      </div>
    </>
  );
};

export default MobileLayout;
