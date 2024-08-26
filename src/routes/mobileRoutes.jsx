import Events from "../pages/mobile/Events/Events";
import Home from "../pages/mobile/Home/Home";
import IFrame from "../pages/mobile/IFrame/IFrame";

export const mobileRoutes = [
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
