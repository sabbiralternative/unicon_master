import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import Bookmaker from "../../../components/ui/desktop/events/Bookmaker";
import Fancy from "../../../components/ui/desktop/events/Fancy";
import MatchOdds from "../../../components/ui/desktop/events/MatchOdds";
import { useGetAllOddsEventsQuery } from "../../../redux/features/events/events";
import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import EventHeader from "../../../components/ui/desktop/events/EventHeader";
import useBalance from "../../../hooks/useBalance";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstOdd,
  setPredictOdd,
  setSecondOdd,
  setThirdOdd,
} from "../../../redux/features/events/eventSlice";
// import IFrame from "../../../components/ui/IFrame/IFrame";
import ScoreCard from "../../../components/ui/desktop/events/ScoreCard";
// import IframeVideoTab from "../../../components/ui/mobile/events/IframeVideoTab";
import HorseGreyhound from "../../../components/ui/desktop/events/HorseGreyhound";

const Events = () => {
  // const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);
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
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, [refetchBalance]);
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

  /* Place bet calculate */
  const pnl1 =
    placeBetValues?.pnl && placeBetValues?.pnl[0] ? placeBetValues?.pnl[0] : 0;
  const pnl2 =
    placeBetValues?.pnl && placeBetValues?.pnl[1] ? placeBetValues?.pnl[1] : 0;
  const pnl3 =
    placeBetValues?.pnl && placeBetValues?.pnl[2] ? placeBetValues?.pnl[2] : 0;
  const selectionId = placeBetValues?.selectionId?.toString();

  useEffect(() => {
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        let total;

        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (selectionId && selectionId.includes(".1")) {
          dispatch(setFirstOdd(formatNumber(total + pnl1)));
          dispatch(setSecondOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl3 + -1 * stake)));

          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(total + pnl1),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(pnl3 + -1 * stake),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        } else if (selectionId && selectionId.includes(".2")) {
          dispatch(setFirstOdd(formatNumber(total + pnl2)));
          dispatch(setSecondOdd(formatNumber(pnl3 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[2],
              },
              {
                odd: formatNumber(total + pnl2),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(pnl3 + -1 * stake),
                id: placeBetValues?.runnerId[0],
              },
            ])
          );
        } else {
          dispatch(setFirstOdd(formatNumber(total + pnl3)));
          dispatch(setSecondOdd(formatNumber(pnl1 + -1 * stake)));
          dispatch(setThirdOdd(formatNumber(pnl2 + -1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(pnl1 + -1 * stake),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(pnl2 + -1 * stake),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(total + pnl3),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        }
      } else if (placeBetValues?.lay) {
        let total;
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (selectionId && selectionId.includes(".1")) {
          dispatch(setFirstOdd(formatNumber(total + pnl1)));
          dispatch(setSecondOdd(formatNumber(1 * pnl2 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl3 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(total + pnl1),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl2 + 1 * stake)),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl3 + 1 * stake)),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        } else if (selectionId && selectionId.includes(".2")) {
          dispatch(setFirstOdd(formatNumber(total + pnl2)));
          dispatch(setSecondOdd(formatNumber(1 * pnl3 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl1 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(formatNumber(1 * pnl1 + 1 * stake)),
                id: placeBetValues?.runnerId[2],
              },
              {
                odd: formatNumber(total + pnl2),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl3 + 1 * stake)),
                id: placeBetValues?.runnerId[0],
              },
            ])
          );
        } else {
          dispatch(setFirstOdd(formatNumber(total + pnl3)));
          dispatch(setSecondOdd(formatNumber(1 * pnl1 + 1 * stake)));
          dispatch(setThirdOdd(formatNumber(1 * pnl2 + 1 * stake)));
          dispatch(
            setPredictOdd([
              {
                odd: formatNumber(formatNumber(1 * pnl1 + 1 * stake)),
                id: placeBetValues?.runnerId[0],
              },
              {
                odd: formatNumber(formatNumber(1 * pnl2 + 1 * stake)),
                id: placeBetValues?.runnerId[1],
              },
              {
                odd: formatNumber(total + pnl3),
                id: placeBetValues?.runnerId[2],
              },
            ])
          );
        }
      }
    } else {
      let total = price * stake - stake;

      dispatch(
        setPredictOdd([
          {
            odd: formatNumber(total + pnl1),
            id: placeBetValues?.runnerId,
          },
        ])
      );
    }
  }, [price, stake, placeBetValues, pnl1, pnl2, pnl3, selectionId, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  return (
    <div className={`flex flex-col transition-all ease-in-out duration-100 `}>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-54px + 100dvh)" }}
        >
          <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
            <EventHeader data={data} eventTypeId={eventTypeId} />

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
            {match_odds?.[0]?.score?.length > 0 && eventTypeId == 4 && (
              <ScoreCard score={data?.score} match_odds={match_odds} />
            )}

            {/* <IframeVideoTab tab={tab} setTab={setTab} score={data?.score} /> */}
            {/* <IFrame betType={tab} score={data?.score} setBetType={setTab} /> */}

            <div className="w-full text-selection-none pb-3 lg:pb-0">
              <div className="px-2 font-helvetica-neue">
                {match_odds?.length > 0 && (
                  <MatchOdds match_odds={match_odds} />
                )}
                {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}

                {fancy?.length > 0 && <Fancy fancy={fancy} />}

                {eventTypeId == 7 || eventTypeId == 4339 ? (
                  <HorseGreyhound data={data} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default Events;
