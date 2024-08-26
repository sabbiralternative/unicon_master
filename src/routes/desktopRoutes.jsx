import Events from "../pages/desktop/Events/Events";
import Home from "../pages/desktop/Home/Home";
import IFrame from "../pages/desktop/IFrame/IFrame";

export const desktopRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/game-details/:eventTypeId/:eventId",
    element: <Events />,
  },
  {
    path: "/:route/:name/:gameId",
    element: <IFrame />,
  },
];
