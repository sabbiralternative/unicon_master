import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import { desktopRoutes } from "./desktopRoutes.jsx";
import { mobileRoutes } from "./mobileRoutes.jsx";


const MainRouter = () => {
  const windowWidth = useWindowWidth();
  const routes = windowWidth > 1024 ? desktopRoutes : mobileRoutes;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouter;
