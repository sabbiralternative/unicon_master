import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/desktop/Footer/Footer";
import Header from "../shared/mobile/Header/Header";

const MobileLayout = () => {
  const location = useLocation();
  return (
    <>
      <div className="hideSesPopover md ion-page hydrated ">
        <div
          id="LeftSide"
          mode="md"
          className="rou222ter-outlet menu-content menu-content-push hydrated"
        >
          <div className="ion-page" style={{ zIndex: 101 }}>
            <Header />
            <div
              className="default-page__content md hydrated"
              style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
            >
              <Outlet />

              {!location?.pathname?.includes("game-details") && <Footer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
