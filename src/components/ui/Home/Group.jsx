import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { groupTitle } from "../../../const";
import assets from "../../../assets";

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
      {/* <ion-item-group
          className="promotion-content md item-group-md item hydrated"
          role="group"
        >
          <div className="top-baner-wrapper false">
            <div
              className="slick-slider slider variable-width slick-initialized"
              dir="ltr"
            >
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: "13410px",
                    opacity: 1,
                    transform: "translate3d(-1920px, 0px, 0px)",
                  }}
                >
                  <div
                    data-index="-6"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-5"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/IshanCrore-1718966438595");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-4"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/PrincipleGulf-1718966637662");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-3"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/AssociateSharjah-1718966683664");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelDubSponsor-1718966819602");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelhiDevils-1718966736075");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide slick-active slick-current"
                    aria-hidden="false"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/IshanCrore-1718966438595");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/PrincipleGulf-1718966637662");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/AssociateSharjah-1718966683664");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelDubSponsor-1718966819602");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    className="slick-slide"
                    aria-hidden="true"
                    style={{ outline: "none" }}
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelhiDevils-1718966736075");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/IshanCrore-1718966438595");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/PrincipleGulf-1718966637662");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="9"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/AssociateSharjah-1718966683664");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="10"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelDubSponsor-1718966819602");'
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="11"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="slider_banner__item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div
                          className="slider_banner__item_img"
                          style='background-image: url("https://promomaterial.imgix.net/inPlaySlidingBanners/DelhiDevils-1718966736075");'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sport-buttons">
            <ion-button
              mode="md"
              className="sport-button md button button-solid ion-activatable ion-focusable hydrated"
              id="undefined"
            >
              <div className="sport-button__content">
                <img
                  className="sport-button__background-img"
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938"
                  alt=""
                />
                <div className="sport-button__content-text">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461957"
                    alt=""
                  />
                  <span>cricket</span>
                </div>
              </div>
            </ion-button>
            <ion-button
              mode="md"
              className="sport-button md button button-solid ion-activatable ion-focusable hydrated"
              id="undefined"
            >
              <div className="sport-button__content">
                <img
                  className="sport-button__background-img"
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514974"
                  alt=""
                />
                <div className="sport-button__content-text">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514989"
                    alt=""
                  />
                  <span>Football</span>
                </div>
              </div>
            </ion-button>
            <ion-button
              mode="md"
              className="sport-button md button button-solid ion-activatable ion-focusable hydrated"
              id="undefined"
            >
              <div className="sport-button__content">
                <img
                  className="sport-button__background-img"
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559167"
                  alt=""
                />
                <div className="sport-button__content-text">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559179"
                    alt=""
                  />
                  <span>Tennis</span>
                </div>
              </div>
            </ion-button>
            <ion-button
              mode="md"
              className="sport-button md button button-solid ion-activatable ion-focusable hydrated"
              id="undefined"
            >
              <div className="sport-button__content">
                <img
                  className="sport-button__background-img"
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625542"
                  alt=""
                />
                <div className="sport-button__content-text">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625546"
                    alt=""
                  />
                  <span>Horse</span>
                </div>
              </div>
            </ion-button>
            <ion-button
              mode="md"
              className="sport-button md button button-solid ion-activatable ion-focusable hydrated"
              id="undefined"
            >
              <div className="sport-button__content">
                <img
                  className="sport-button__background-img"
                  src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684708"
                  alt=""
                />
                <div className="sport-button__content-text">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684721"
                    alt=""
                  />
                  <span>Greyhound</span>
                </div>
              </div>
            </ion-button>
          </div>
          <div className="promotion-buttons">
            <ion-button
              mode="md"
              id="tower"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145463");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474");'
                ></div>
                Tower Legends
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="jili-204"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763420"); background-color: rgb(232, 222, 222);'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431");'
                ></div>
                Color Game
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="6"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Limbo.webp");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125");'
                ></div>
                Limbo
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="6"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Mines.webp");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png");'
                ></div>
                Mines
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="77hj"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199645");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647");'
                ></div>
                Aura
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="6"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963116");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125");'
                ></div>
                Aviator
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="1"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275808");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817");'
                ></div>
                Evolution
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="2"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352020");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029");'
                ></div>
                Sportsbook
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="3"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704269");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279");'
                ></div>
                Live Casinos
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="4"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799120");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122");'
                ></div>
                e-Cricket
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="5"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853715");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726");'
                ></div>
                Card Games
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="76"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015298");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300");'
                ></div>
                Slot Games
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="533"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077487");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489");'
                ></div>
                Multiplayer Games
              </div>
            </ion-button>
            <ion-button
              mode="md"
              id="kjhg"
              className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
            >
              <div
                className="promotion-button__content"
                style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252625");'
              >
                <div
                  className="promotion-button__icon"
                  style='background-image: url("https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627");'
                ></div>
                Fishing games
              </div>
            </ion-button>
          </div>
        </ion-item-group> */}
    </div>
  );
};

export default Group;
