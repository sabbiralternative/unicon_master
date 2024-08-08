import Events from "../pages/desktop/Events/Events";
import Home from "../pages/desktop/Home/Home";

export const desktopRoutes = [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/game-details/:eventTypeId/:eventId",
      element: <Events />,
    },
  ]