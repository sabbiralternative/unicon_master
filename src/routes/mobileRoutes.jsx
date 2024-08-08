import Events from "../pages/mobile/Events/Events";
import Home from "../pages/mobile/Home/Home";

export const mobileRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/game-details/:eventTypeId/:eventId",
    element: <Events />,
  },
];
