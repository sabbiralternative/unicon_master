import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import { desktopRoutes } from "./desktopRoutes.jsx";
import { mobileRoutes } from "./mobileRoutes.jsx";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop.jsx";
import Deposit from "../pages/Deposit/Deposit.jsx";
import Withdraw from "../pages/Withdraw/Withdraw.jsx";
import RulesRegulation from "../pages/RulesRegulation/RulesRegulation.jsx";
import ExclusivePolicy from "../pages/ExclusivePolicy/ExclusivePolicy.jsx";
import ResponsibleGambling from "../pages/ResponsibleGambling/ResponsibleGambling.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ChangePassword from "../pages/ChangePassword/ChangePassword.jsx";
import StakeSettings from "../pages/StakeSettings/StakeSettings.jsx";

const MainRouter = () => {
  const windowWidth = useWindowWidth();
  const routes = windowWidth > 1024 ? desktopRoutes : mobileRoutes;

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <ScrollToTop />
            <App />
          </>
        ),
        children: [
          ...routes,
          {
            path: "/deposit",
            element: <Deposit />,
          },
          {
            path: "/withdraw",
            element: <Withdraw />,
          },
          {
            path: "/rules-&-regulation",
            element: <RulesRegulation />,
          },
          {
            path: "/exclusive-policy",
            element: <ExclusivePolicy />,
          },
          {
            path: "/responsible-gambling",
            element: <ResponsibleGambling />,
          },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/change-password",
            element: <ChangePassword />,
          },
          {
            path: "/stake-settings",
            element: <StakeSettings />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
