import { useParams } from "react-router-dom";
import BetSlip from "../../components/ui/Home/BetSlip";
import { useGetAllOddsEventsQuery } from "../../redux/features/events/events";
import { useEffect, useState } from "react";
import MatchOdds from "../../components/ui/events/MatchOdds";
import Bookmaker from "../../components/ui/events/Bookmaker";
import Fancy from "../../components/ui/events/Fancy";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { settings } from "../../api";

const Events = () => {
  const { eventTypeId, eventId } = useParams();
  const payload = {
    eventTypeId,
    eventId,
  };
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmaker, setBookmaker] = useState([]);
  const [bookmaker2, setBookmaker2] = useState([]);
  const [fancy, setFancy] = useState([]);
  const [fancy1, setFancy1] = useState([]);
  const [overByOver, setOverByOver] = useState([]);
  const { data } = useGetAllOddsEventsQuery(payload, {
    pollingInterval: settings.interval,
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
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

      const filterBookmarker2 = events?.filter(
        (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
      );
      setBookmaker2(filterBookmarker2);

      const normalFilter = events?.filter(
        (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
      );
      setFancy(normalFilter);

      const fancy1Filter = events?.filter(
        (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
      );
      setFancy1(fancy1Filter);

      const overByOverFilter = events?.filter(
        (overByOver) =>
          overByOver.btype === "FANCY" &&
          overByOver.tabGroupName === "Over By Over"
      );
      setOverByOver(overByOverFilter);
    }
  }, [data]);

  return (
    <div className="main_container ">
      <Sidebar />
      <div className="main_container-center   11111 ">
        <div className="EventPage">
          <div
            className="favourites-header   "
            style={{ marginBottom: "15px" }}
          >
            <div className="favourites-header__inner-wrapper">
              <h1 style={{ marginLeft: "12px" }}>
                {data?.result?.length > 0 && data?.result?.[0]?.eventName}
              </h1>
              <div className="sportsPage-headerBet">
                <span>
                  {" "}
                  {data?.result?.length > 0 && data?.result?.[0]?.openDate}{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="SportEvent">
            <div className="favourites-header__rules-button-wrapper">
              <div className="favourites-header__rules-button">
                <div className="favourites-header__rules-button-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.1402 0 0 3.14024 0 7.00004C0 10.8598 3.1402 14 7 14C10.8598 14 14 10.8598 14 7.00004C14 3.14024 10.8598 0 7 0ZM7 12.7273C3.84194 12.7273 1.27273 10.1581 1.27273 7.00004C1.27273 3.84202 3.84194 1.27273 7 1.27273C10.1581 1.27273 12.7273 3.84202 12.7273 7.00004C12.7273 10.1581 10.158 12.7273 7 12.7273Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.00017 2.96875C6.5324 2.96875 6.15186 3.34955 6.15186 3.81762C6.15186 4.28526 6.5324 4.66572 7.00017 4.66572C7.46794 4.66572 7.84849 4.28526 7.84849 3.81762C7.84849 3.34955 7.46794 2.96875 7.00017 2.96875Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.00013 5.93945C6.64869 5.93945 6.36377 6.22437 6.36377 6.57582V10.394C6.36377 10.7454 6.64869 11.0304 7.00013 11.0304C7.35158 11.0304 7.6365 10.7454 7.6365 10.394V6.57582C7.6365 6.22437 7.35158 5.93945 7.00013 5.93945Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <span className="favourites-header__rules-button-text">
                  Rules
                </span>
              </div>
            </div>
            {match_odds?.length > 0 && <MatchOdds match_odds={match_odds} />}
            {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}
            {fancy?.length > 0 && <Fancy fancy={fancy} />}
          </div>
        </div>
      </div>
      <BetSlip />
    </div>
  );
};

export default Events;
