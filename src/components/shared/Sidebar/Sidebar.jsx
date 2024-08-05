import { useDispatch } from "react-redux";
import assets from "../../../assets";
import { setGroupType } from "../../../redux/features/stateSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="main_container-left">
      <div className="sideBarMenu__wrapper">
        <div className="sideBarMenu">
          <div className="sideBarMenu-content">
            <div className="content-list active">
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
                onClick={() => dispatch(setGroupType(4))}
                className="content-list__item"
              >
                <img className="content-list__item-icon" src={assets.cricket} />
                <span className="content-list__item-text">Cricket</span>
              </div>
              <div
                onClick={() => dispatch(setGroupType(1))}
                className="content-list__item"
              >
                <img
                  className="content-list__item-icon"
                  src={assets.football}
                />
                <span className="content-list__item-text">Football</span>
              </div>
              <div
                onClick={() => dispatch(setGroupType(2))}
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
            <div className="contentList ">
              <div className="contentList__detailed">
                <img src="static/media/sideBarStar.8347cb3e.svg" alt="" />
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
                <img src="static/media/sideBarStar.8347cb3e.svg" alt="" />
                <span>Favourites</span>
              </div>
              <div className="contentListMore__detailed">
                <img src="static/media/detailedHomepage.056e77cb.svg" alt="" />
                <span>Sports</span>
              </div>
              <div className="contentListMore__detailed-game null">
                <img alt="" />
                <span></span>
              </div>
              <div className="contentListMore__detailed-previous null">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
