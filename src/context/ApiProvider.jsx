import { createContext, useEffect, useState } from "react";
import { getSetApis } from "../api/config";

export const ApiContext = createContext(null);
const ApiProvider = ({ children }) => {
  const [noticeLoaded, setNoticeLoaded] = useState(false);

  useEffect(() => {
    getSetApis(setNoticeLoaded);
  }, [noticeLoaded]);

  if (!noticeLoaded) {
    return;
  }

  const stateInfo = {};
  return (
    <ApiContext.Provider value={stateInfo}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
