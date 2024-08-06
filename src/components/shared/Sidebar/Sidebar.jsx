import { useDispatch, useSelector } from "react-redux";
import assets from "../../../assets";
import { setGroupType } from "../../../redux/features/stateSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { groupTitle } from "../../../const";
import { useGetAllOddsEventsQuery } from "../../../redux/features/events/events";

const Sidebar = () => {
  const { group } = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { eventTypeId, eventId } = useParams();
  const payload = {
    eventTypeId,
    eventId,
  };
  const { data } = useGetAllOddsEventsQuery(payload);
  return (
    <div className="main_container-left">
      <div className="sideBarMenu__wrapper">
        <div className="sideBarMenu">
          <div className="sideBarMenu-content">
            <div
              className={`content-list ${
                location.pathname === "/" ? "active" : "inactiveDet"
              }`}
            >
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.favorite}
                  alt=""
                />
                <span className="content-list__item-text sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                  Favourites
                </span>
              </div>
              <div
                onClick={() =>{
                  navigate('/')
                  dispatch(setGroupType(4))
                }}
                className="content-list__item"
              >
                <img className="content-list__item-icon" src={assets.cricket} />
                <span className="content-list__item-text">Cricket</span>
              </div>
              <div
                onClick={() =>{
                  navigate('/')
                  dispatch(setGroupType(1))
                }}
                className="content-list__item"
              >
                <img
                  className="content-list__item-icon"
                  src={assets.football}
                />
                <span className="content-list__item-text">Football</span>
              </div>
              <div
                onClick={() => {
                  navigate('/')
                  dispatch(setGroupType(2))
                }}
                className="content-list__item"
              >
                <img className="content-list__item-icon" src={assets.tennis} />
                <span className="content-list__item-text">Tennis</span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.horseRacing}
                />
                <span className="content-list__item-text">Horse Racing</span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.greyhound}
                />
                <span className="content-list__item-text">
                  Greyhound Racing
                </span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.cardGames}
                />
                <span className="content-list__item-text">
                  Indian Card Games
                </span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.sportsBook}
                />
                <span className="content-list__item-text">Sportsbook</span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.liveCasino}
                />
                <span className="content-list__item-text">Live Casino</span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.blastOff}
                  alt=""
                />
                <span className="content-list__item-text sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                  BlastOff
                </span>
              </div>
              <div className="content-list__item">
                <img
                  className="content-list__item-icon"
                  src={assets.slotGames}
                  alt=""
                />
                <span className="content-list__item-text sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                  Slots Games
                </span>
              </div>
            </div>
            <div
              className={`contentList  ${
                location.pathname === "/" ? "active" : "inactiveDet"
              }`}
            >
              <div className="contentList__detailed">
                <img src={assets.favorite} alt="" />
                <span>Favourites</span>
              </div>
              <div className="contentList__detailed">
                <img src="static/media/detailedHomepage.056e77cb.svg" alt="" />
                <span>Sports</span>
              </div>
              <div className="contentList__detailed-game null">
                <img alt="" />
                <span></span>
              </div>
              <div className="contentList__detailed-previous null">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM7.66789 11.9571C8.05842 12.3476 8.69158 12.3476 9.08211 11.9571C9.47263 11.5666 9.47263 10.9334 9.08211 10.5429L6.03921 7.5L9.08211 4.45711C9.47263 4.06658 9.47263 3.43342 9.08211 3.04289C8.69158 2.65237 8.05842 2.65237 7.66789 3.04289L3.9886 6.72218C3.55903 7.15176 3.55903 7.84824 3.9886 8.27782L7.66789 11.9571Z"
                  ></path>
                </svg>
                <span style={{ display: "inline-block", paddingLeft: "10px" }}>
                  Previous
                </span>
              </div>
            </div>
            <div className="contentListMore">
              <div className="contentListMore__detailed">
                <img src={assets.favorite} alt="" />
                <span>Favourites</span>
              </div>
              <div
              onClick={()=> navigate('/')}
              className="contentListMore__detailed">
                <img src={assets.home}  alt="" />
                <span>Sports</span>
              </div>
              <div className="contentListMore__detailed-game cricketTitle">
                <img
                  alt=""
                  src="/static/media/detailedCricketWhite.8ffac7af.svg"
                />
                <span>{groupTitle[group]}</span>
              </div>
              <div
                onClick={() => navigate(-1)}
                className="contentListMore__detailed-previous cricketPrevious"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM7.66789 11.9571C8.05842 12.3476 8.69158 12.3476 9.08211 11.9571C9.47263 11.5666 9.47263 10.9334 9.08211 10.5429L6.03921 7.5L9.08211 4.45711C9.47263 4.06658 9.47263 3.43342 9.08211 3.04289C8.69158 2.65237 8.05842 2.65237 7.66789 3.04289L3.9886 6.72218C3.55903 7.15176 3.55903 7.84824 3.9886 8.27782L7.66789 11.9571Z"
                    fill="#811F0F"
                  ></path>
                </svg>
                <span style={{ display: "inline-block", paddingLeft: "10px" }}>
                  Previous
                </span>
              </div>
              <div
                className="contentListMore__detailed cricketCompetition"
                style={{ color: "white", background: "rgb(129, 31, 15)" }}
              >
                <span style={{ fontWeight: "500" }}>
                  {" "}
                  {data?.result?.length > 0 && data?.result?.[0]?.eventName}
                </span>
                <svg
                  className="arrowRight"
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "10px" }}
                >
                  <path
                    d="M1.625 9.25L5.30429 5.57071C5.34334 5.53166 5.34334 5.46834 5.30429 5.42929L1.625 1.75"
                    stroke="#811F0F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  className="arrowRightWhite"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 11.25L9.30429 7.57071C9.34334 7.53166 9.34334 7.46834 9.30429 7.42929L5.625 3.75"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
