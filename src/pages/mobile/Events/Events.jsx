import { useParams } from "react-router-dom";
import Bookmaker from "../../../components/ui/mobile/events/Bookmaker";
import Fancy from "../../../components/ui/mobile/events/Fancy";
import MatchOdds from "../../../components/ui/mobile/events/MatchOdds";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import { useGetAllOddsEventsQuery } from "../../../redux/features/events/events";

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
    <div
      id="LeftSide"
      mode="md"
      className="rou222ter-outlet menu-content menu-content-push hydrated"
    >
      <div className="ion-page can-go-back" style={{ zIndex: "101" }}>
        <div
          className="onscrollHeader md header-md header-collapse-none hydrated"
          style={{ transform: "none" }}
          role="banner"
        >
          <div className="div onscroll md in-toolbar hydrated toolbar-label">
            <div className="EventHeader">
              <div className="EventHeader__details">
                <div className="EventHeader__details__main">
                  <i className="header-icon header-icon--timer"></i>
                  <div className="EventHeader__details__main__title">
                    {data?.result?.length > 0 && data?.result?.[0]?.eventName}
                  </div>
                </div>
                <div className="EventHeader__details__additional-container">
                  <div className="EventHeader__details__additional with-padding">
                    {data?.result?.length > 0 && data?.result?.[0]?.openDate}{" "}
                  </div>
                </div>
              </div>
              <div className="EventHeader__info">
                <img
                  src="static/media/info_icon.0df2aa8d.svg"
                  className="EventHeader__info__icon md hydrated"
                  role="img"
                ></img>
              </div>
            </div>
            <div className="ion-toolbar__wrapper toolbar__tabs">
              <div className="toolbar__tabs__bar" slot="bottom">
                <div className="toolbar__tabs__bar__tab active">
                  <ion-label className="sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                    market
                  </ion-label>
                </div>
                <div className="toolbar__tabs__bar__tab">
                  <ion-label className="sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                    news
                  </ion-label>
                </div>
                <div className="toolbar__tabs__bar__tab">
                  <ion-label className="sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                    live
                  </ion-label>
                  <span className="LiveSection__tv-icon"></span>
                </div>
                <div className="toolbar__tabs__bar__tab">
                  <ion-label className="sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                    open bets (0)
                  </ion-label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="EventPage md hydrated"
          style={{ "--offset-top": "61px", "--offset-bottom": "0px" }}
        >
          <div className="SportEvent">
            {match_odds?.length > 0 && <MatchOdds match_odds={match_odds} />}
            {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}
            {fancy?.length > 0 && <Fancy fancy={fancy} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
