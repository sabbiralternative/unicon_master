import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userToken } from "../../../redux/features/auth/authSlice";
import handleRandomToken from "../../../utils/handleRandomToken";
import handleEncryptData from "../../../utils/handleEncryptData";
import { API, settings } from "../../../api";
import axios from "axios";

const IFrame = () => {
  const [loading, setLoading] = useState(false);
  const [iFrame, setIFrame] = useState("");
  const { gameId } = useParams();
  const token = useSelector(userToken);

  /* get iframe url */
  useEffect(() => {
    window.scrollTo(0, 0);
    const getCasinoVideo = async () => {
      setLoading(true);
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        gameId: gameId,
        token: generatedToken,
        isHome: false,
        mobileOnly: true,
        site: settings.siteUrl,
        casinoCurrency: settings.casinoCurrency,
      });

      try {
        const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res?.data;
        console.log(data);
        setIFrame(data?.gameUrl);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error opening casino game:", error);
      }
    };
    getCasinoVideo();
  }, [gameId, token]);
  return (
    <div className="w-full flex flex-col app-bg h-[100dvh] overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
        <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
            // style={{minHeight:"calc(-54px + 100dvh)"}}
          >
            <div className="w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
              <iframe
                src={iFrame}
                title="AVIATOR"
                className="w-full h-full flex-grow no-scrollbar"
                allowFullscreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFrame;
