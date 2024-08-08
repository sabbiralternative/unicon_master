import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { groupTitle } from "../../../../const";
import assets from "../../../../assets";

const Group = ({ data }) => {
  const { group } = useSelector((state) => state.state);
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <div
      className="default-page__content sportsPage"
      style={{ position: "relative" }}
    >
      <span style={{ position: "absolute", top: "-135px" }}></span>
      <div className="favourites-header">
        <h1>{groupTitle[group]}</h1>
        <p className="sportsPage-headerBet">Betting from 1min before start</p>
      </div>
      <div className="sportsPage-subHeader">
        <span>Match</span>
        <div className="sportsPage-subHeader-players cricket-football">
          <span>1</span>
          <span>X</span>
          <span>2</span>
        </div>
      </div>
      <div className="inplay-item-list md list-md hydrated">
        {data &&
          Object.values(data).length > 0 &&
          Object.keys(data)
            .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
            .map((keys, index) => {
              return (
                <div
                  onClick={() => navigateGameList(keys)}
                  key={index}
                  className="sportPageItem"
                >
                  <div className="inplay-item item md in-list hydrated">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__desktop">
                          <div className="inplay-item__players">
                            <span className="inplay-item__player">
                              <span className="inplay-item__player-name">
                                {data[keys]?.eventName}
                              </span>
                              <span className="inplay-item__player-date">
                                {data?.[keys]?.inPlay == 1 && (
                                  <span className="inplay-item__player-inPlay">
                                    <img
                                      src={assets.inPlay}
                                      alt="In-Play icon"
                                    />{" "}
                                    In-Play
                                  </span>
                                )}
                                {data?.[keys]?.inPlay == 0 && (
                                  <>
                                    <span>{data?.[keys]?.date}</span>
                                  </>
                                )}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner  inplay-item__back-inner-left">
                              {data[keys]?.[0] && (
                                <>
                                  <span
                                    className={`odd-button back-color ${
                                      data?.[keys]?.status === "OPEN"
                                        ? ""
                                        : "not-active"
                                    }`}
                                  >
                                    <span className="odd-button__inner odd-button__inner--centered ">
                                      <div className="odd-button__price">
                                        {
                                          data[keys]?.[0]?.ex
                                            ?.availableToBack[0]?.price
                                        }{" "}
                                      </div>
                                      <div className="odd-button__volume">
                                        {" "}
                                        {
                                          data[keys]?.[0]?.ex
                                            ?.availableToBack[0]?.size
                                        }
                                      </div>
                                    </span>
                                  </span>

                                  <span
                                    className={`odd-button lay-color ${
                                      data?.[keys]?.status === "OPEN"
                                        ? ""
                                        : "not-active"
                                    }`}
                                  >
                                    <span className="odd-button__inner odd-button__inner--centered ">
                                      <div className="odd-button__price">
                                        {" "}
                                        {
                                          data[keys]?.[0]?.ex?.availableToLay[0]
                                            ?.price
                                        }
                                      </div>
                                      <div className="odd-button__volume">
                                        {" "}
                                        {
                                          data[keys]?.[0]?.ex?.availableToLay[0]
                                            ?.size
                                        }
                                      </div>
                                    </span>
                                  </span>
                                </>
                              )}

                              {data[keys]?.status === "OPEN" &&
                                data[keys][2] && (
                                  <>
                                    <span
                                      className={`odd-button back-color ${
                                        data?.[keys]?.status === "OPEN"
                                          ? ""
                                          : "not-active"
                                      }`}
                                    >
                                      <span className="odd-button__inner odd-button__inner--centered ">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToBack[0]?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {" "}
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToBack[0]?.size
                                          }
                                        </div>
                                      </span>
                                    </span>
                                    <span
                                      className={`odd-button lay-color ${
                                        data?.[keys]?.status === "OPEN"
                                          ? ""
                                          : "not-active"
                                      }`}
                                    >
                                      <span className="odd-button__inner odd-button__inner--centered ">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToLay[0]?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {" "}
                                          {
                                            data[keys]?.[2]?.ex
                                              ?.availableToLay[0]?.size
                                          }
                                        </div>
                                      </span>
                                    </span>
                                  </>
                                )}
                              {!data[keys][2] && (
                                <>
                                  <span className="odd-button back-color not-active    ">
                                    <span className="odd-button__inner odd-button__inner--centered ">
                                      <div className="odd-button__price">
                                        {" "}
                                        -
                                      </div>
                                    </span>
                                  </span>
                                  <span className="odd-button lay-color not-active    ">
                                    <span className="odd-button__inner odd-button__inner--centered ">
                                      <div className="odd-button__price">
                                        {" "}
                                        -
                                      </div>
                                    </span>
                                  </span>
                                </>
                              )}

                              {data[keys]?.status === "OPEN" &&
                                data[keys][1] && (
                                  <>
                                    <span
                                      className={`odd-button back-color ${
                                        data?.[keys]?.status === "OPEN"
                                          ? ""
                                          : "not-active"
                                      }`}
                                    >
                                      <span className="odd-button__inner odd-button__inner--centered ">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToBack[0]?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {" "}
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToBack[0]?.size
                                          }
                                        </div>
                                      </span>
                                    </span>
                                    <span
                                      className={`odd-button lay-color ${
                                        data?.[keys]?.status === "OPEN"
                                          ? ""
                                          : "not-active"
                                      }`}
                                    >
                                      <span className="odd-button__inner odd-button__inner--centered ">
                                        <div className="odd-button__price">
                                          {" "}
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToLay[0]?.price
                                          }
                                        </div>
                                        <div className="odd-button__volume">
                                          {" "}
                                          {
                                            data[keys]?.[1]?.ex
                                              ?.availableToLay[0]?.size
                                          }
                                        </div>
                                      </span>
                                    </span>
                                  </>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Group;
