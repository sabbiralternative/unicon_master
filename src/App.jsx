import { useEffect, useState } from "react";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";
import disableDevtool from "disable-devtool";
import { useDispatch } from "react-redux";
import { logout } from "./redux/features/auth/authSlice";
import { settings } from "./api";

const App = () => {
  const dispatch = useDispatch();
  const disabledDevtool = settings.disabledDevtool;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Disable devtool */
  useEffect(() => {
    /* If disable devtool true in notice.json then logout the user */
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [disabledDevtool, dispatch]);
  return <div>{windowWidth > 1024 ? <DesktopLayout /> : <MobileLayout />}</div>;
};

export default App;
