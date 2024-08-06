import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game-details/:eventTypeId/:eventId",
        element: <Events />,
      },
    ],
  },
]);
