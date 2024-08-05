import { useNavigate } from "react-router-dom";

const InPlay = ({ data }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <>
      <div className="inplay-popular-header inplay-header-color">
        <div className="inplay-popular-header__logo">
          <i className="inplay-popular-header__logo-icon inplay-header-icon"></i>
          <span className="inplay-popular-header__logo-text">In Play</span>
        </div>
      </div>

      <div className="inplay-item-list md list-md hydrated">
        <div className="inplay-item-list__header md hydrated">
          <div className="inplay-item-list__header-content">
            <div className="inplay-item-list__header-logo">
              <i className="inplay-content__logo-icon inplay-content__logo-icon--cricket inplay-color-icon"></i>
             In Play
            </div>
            <div className="inplay-item-list__header-title">
              <span>1</span>
              <span>X</span>
              <span>2</span>
            </div>
          </div>
        </div>

        {data &&
          Object.values(data).length > 0 &&
          Object.keys(data)
            .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
            .map((keys, index) => {
              return (
                <div
                  onClick={() => navigateGameList(keys)}
                  key={index}
                  className="inplay-item item md in-list hydrated"
                >
                  <img loading="lazy" />
                  <div className="inplay-item__content">
                    <div className="inplay-item__row">
                      <div className="inplay-item__desktop">
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>{data[keys]?.eventName}</span>
                          </span>
                          {/* <span className="inplay-item__player">
                  <span>Delhi Capitals SRL</span>
                </span> */}
                        </div>
                      </div>

                      <div className="inplay-item__back">
                        <div className="inplay-item__back-inner">
                          <div className="inplay-item__back-inner inplay-item__back-inner-left">
                            {data[keys]?.status === "OPEN" && data[keys][0] && (
                              <>
                                <span className="odd-button back-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[0]?.ex?.availableToBack[0]
                                          ?.price
                                      }
                                    </div>
                                  </span>
                                </span>
                                <span className="odd-button lay-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[0]?.ex?.availableToLay[0]
                                          ?.price
                                      }
                                    </div>
                                  </span>
                                </span>
                              </>
                            )}

                            {data[keys]?.status === "OPEN" && data[keys][2] && (
                              <>
                                <span className="odd-button back-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[2]?.ex?.availableToBack[0]
                                          ?.price
                                      }
                                    </div>
                                  </span>
                                </span>
                                <span className="odd-button lay-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[2]?.ex?.availableToLay[0]
                                          ?.price
                                      }
                                    </div>
                                  </span>
                                </span>
                              </>
                            )}
                            {!data[keys][2] && (
                              <>
                                <span className="odd-button back-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">-</div>
                                  </span>
                                </span>
                                <span className="odd-button lay-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">-</div>
                                  </span>
                                </span>
                              </>
                            )}

                            {data[keys]?.status === "OPEN" && data[keys][1] && (
                              <>
                                <span className="odd-button back-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[1]?.ex?.availableToBack[0]
                                          ?.price
                                      }
                                    </div>
                                  </span>
                                </span>
                                <span className="odd-button lay-color     ">
                                  <span className="odd-button__inner odd-button__inner--centered ">
                                    <div className="odd-button__price">
                                      {
                                        data[keys]?.[1]?.ex?.availableToLay[0]
                                          ?.price
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
              );
            })}
      </div>
    </>
  );
};

export default InPlay;
