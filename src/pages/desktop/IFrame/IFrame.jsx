import { useParams } from "react-router-dom";
import { API, settings } from "../../../api";
import handleEncryptData from "../../../utils/handleEncryptData";
import handleRandomToken from "../../../utils/handleRandomToken";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";

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
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-0">
      <div className="flex items-start justify-start w-full">
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-full"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="' bg-transparent w-full h-full">
            <div className="w-full flex h-[calc(100dvh-42px)] lg:h-[calc(100dvh-54px)]">
              <iframe
                src={iFrame}
                title="AVIATOR"
                className="w-full h-full flex-grow no-scrollbar"
                allowFullscreen={true}
              ></iframe>
            </div>
          </div>
          <div className="px-[6px]"></div>
          <div className="py-1 px-[6px]"></div>
        </div>
      </div>
    </div>
  );
};

export default IFrame;
