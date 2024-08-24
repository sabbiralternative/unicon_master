import { useParams } from "react-router-dom";
import Bookmaker from "../../../components/ui/mobile/events/Bookmaker";
import Fancy from "../../../components/ui/mobile/events/Fancy";
import MatchOdds from "../../../components/ui/mobile/events/MatchOdds";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import { useGetAllOddsEventsQuery } from "../../../redux/features/events/events";
import EventHeader from "../../../components/ui/mobile/events/EventHeader";
import useBalance from "../../../hooks/useBalance";

const Events = () => {
  const { refetchBalance } = useBalance();
  const { eventTypeId, eventId } = useParams();
  const payload = {
    eventTypeId,
    eventId,
  };
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmaker, setBookmaker] = useState([]);
  // const [bookmaker2, setBookmaker2] = useState([]);
  const [fancy, setFancy] = useState([]);
  // const [fancy1, setFancy1] = useState([]);
  // const [overByOver, setOverByOver] = useState([]);
  const { data } = useGetAllOddsEventsQuery(payload, {
    pollingInterval: settings.interval,
  });

  useEffect(() => {
    refetchBalance();
  }, []);
  /* Filtered all the game  */
  useEffect(() => {
    if (data?.result) {
      const events = data?.result;
      const filterMatch_odds = events?.filter(
        (match_odd) => match_odd.btype === "MATCH_ODDS"
      );
      setMatch_odds(filterMatch_odds);

      const bookmarkerFilter = events?.filter(
        (bookmarker) => bookmarker.btype === "BOOKMAKER"
      );
      setBookmaker(bookmarkerFilter);

      // const filterBookmarker2 = events?.filter(
      //   (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
      // );
      // setBookmaker2(filterBookmarker2);

      const normalFilter = events?.filter(
        (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
      );
      setFancy(normalFilter);

      // const fancy1Filter = events?.filter(
      //   (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
      // );
      // setFancy1(fancy1Filter);

      // const overByOverFilter = events?.filter(
      //   (overByOver) =>
      //     overByOver.btype === "FANCY" &&
      //     overByOver.tabGroupName === "Over By Over"
      // );
      // setOverByOver(overByOverFilter);
    }
  }, [data]);

  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[54px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-54px + 100dvh)" }}
        >
          <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
            <EventHeader data={data} />

            {/* <div title="Open Bets" className="hidden">
              <div className="flex items-start justify-start flex-col w-full px-2 py-1">
                <div
                  id="unmatched_0"
                  className="w-full flex items-center justify-between bg-bg_Secondary transition-all ease-in-out my-1 py-1 rounded-[6px] origin-center active:opacity-95"
                >
                  <div className="head pl-2">
                    <span className="text-text_Quaternary font-lato-bold">
                      Unmatched Bets
                    </span>
                  </div>
                  <div className="cursor-pointer mr-2 transform transition-transform ease-in-out flex items-center justify-center w-max origin-center active:scale-90 active:opacity-85">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(180)"
                      viewBox="0 0 512 512"
                      height="16"
                      width="16"
                      fill="var(--color-quaternary)"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>
                  </div>
                </div>
                <div className="BetSections w-full origin-top scaleVerticalOpen">
                  <div className="w-full text-start font-lato font-medium text-sm bg-bg_Quaternary rounded-md mb-1 px-4 py-3 box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); text-text_Ternary">
                    You have no Unmatched Bets.
                  </div>
                </div>
                <div
                  id="matched_1"
                  className="w-full flex items-center justify-between bg-bg_Secondary transition-all ease-in-out my-1 py-1 rounded-[6px] origin-center active:opacity-95"
                >
                  <div className="head pl-2">
                    <span className="text-text_Quaternary font-lato-bold">
                      Matched Bets
                    </span>
                  </div>
                  <div className="cursor-pointer mr-2 transform transition-transform ease-in-out flex items-center justify-center w-max origin-center active:scale-90 active:opacity-85">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(180)"
                      viewBox="0 0 512 512"
                      height="16"
                      width="16"
                      fill="var(--color-quaternary)"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>
                  </div>
                </div>
                <div className="BetSections w-full origin-top scaleVerticalOpen">
                  <div className="w-full text-start font-lato font-medium text-sm bg-bg_Quaternary rounded-md mb-1 px-4 py-3 box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); text-text_Ternary">
                    You have no Matched Bets.
                  </div>
                </div>
              </div>
            </div> */}
            <div className="w-full text-selection-none pb-3 lg:pb-0">
              <div className="px-2 font-helvetica-neue">
                {match_odds?.length > 0 && (
                  <MatchOdds match_odds={match_odds} />
                )}
                {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}
                {fancy?.length > 0 && <Fancy fancy={fancy} />}
              </div>
            </div>
          </div>
          {/* <div
            data-sitekey="6LdTTM0UAAAAAELLYim4P-yClP7aRFBdCrTk1ktS"
            style={{ display: "none" }}
            data-widgetid="0"
          >
            <div
              className="grecaptcha-badge"
              style={{
                width: "256px",
                height: "60px",
                display: "block",
                transition: "right 0.3s",
                position: "fixed",
                bottom: "14px",
                right: "-186px",
                boxShadow: "gray 0px 0px 5px",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div className="grecaptcha-logo">
                <iframe
                  title="reCAPTCHA"
                  width="256"
                  height="60"
                  role="presentation"
                  name="a-ukp7dacktwdl"
                  frameBorder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdTTM0UAAAAAELLYim4P-yClP7aRFBdCrTk1ktS&amp;co=aHR0cHM6Ly91bmljb24zNjUuY29tOjQ0Mw..&amp;hl=en&amp;v=hfUfsXWZFeg83qqxrK27GB8P&amp;size=invisible&amp;cb=mdppz554w6w5"
                ></iframe>
              </div>
              <div className="grecaptcha-error"></div>
              <textarea
                id="g-recaptcha-response"
                name="g-recaptcha-response"
                className="g-recaptcha-response"
                style={{
                  width: "250px",
                  height: "40px",
                  border: "1px solid rgb(193, 193, 193)",
                  margin: "10px 25px",
                  padding: "0px",
                  resize: "none",
                  display: "none",
                }}
              ></textarea>
            </div>
            <iframe style={{ display: "none" }}></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
