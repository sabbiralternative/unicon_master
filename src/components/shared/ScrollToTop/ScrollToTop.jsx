import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable the browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top when path changes
    window.scrollTo(0, 0);

  }, [pathname]);

  return null;
};

export default ScrollToTop;




// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
