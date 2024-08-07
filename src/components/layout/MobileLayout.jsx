import assets from "../../assets";
import Footer from "../shared/Footer/Footer";

const MobileLayout = () => {
  return (
    <>
      <div className="hideSesPopover md ion-page hydrated ">
        <div
          id="LeftSide"
          mode="md"
          className="rou222ter-outlet menu-content menu-content-push hydrated"
        >
          <div className="ion-page" style={{ zIndex: 101 }}>
            <div
              role="banner"
              className="md header-md header-collapse-none hydrated"
            >
              <div className="ion-toolbar onscroll md in-toolbar hydrated">
                <div>
                  <div className="ion-toolbar__wrapper main">
                    <div className="ion-toolbar__left">
                      <div
                        mode="md"
                        className="menu-btn md button button-clear in-toolbar ion-activatable ion-focusable hydrated"
                      >
                        <img
                          src={assets.burger}
                          className="menu-icon md hydrated"
                          role="img"
                        />
                      </div>
                      <div className="toolbar-logo"></div>
                    </div>
                    <div className="ion-toolbar__right">
                      <img
                        src={assets.appIcon}
                        id="focusButton2"
                        className="download-icon md hydrated"
                      />
                      <img
                        src={assets.search}
                        className="search-icon md hydrated"
                      />
                      <div
                        mode="md"
                        className="user-profile-btnLog md button button-solid in-toolbar ion-activatable ion-focusable hydrated"
                      >
                        <div className="loginSignup">
                          <div className="loginSignup-text-2">Log in</div>
                        </div>{" "}
                      </div>
                      <div
                        mode="md"
                        className="user-profile-btn-sign-up md button button-solid in-toolbar ion-activatable ion-focusable hydrated"
                      >
                        <div className="loginSignup">
                          <div className="loginSignup-text">Sign up</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="ion-toolbar__search"
                      style={{ height: "0px" }}
                    >
                      <input
                        className="ion-toolbar__search__input"
                        placeholder="Search Events"
                        value=""
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div
              className="default-page__content md hydrated"
              style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
            >
              <div
                className="promotion-content md item-group-md item hydrated"
                role="group"
              >
                <div className="top-baner-wrapper topBannerPadding">
                  <div
                    className="slick-slider slider variable-width slick-initialized"
                    dir="ltr"
                  >
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          transform: "translate3d(-1920px, 0px, 0px)",
                          width: "8874px",
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
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
                                style={{
                                  backgroundImage:
                                    "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sport-buttons">
                  <div
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
                    </div>{" "}
                  </div>
                  <div
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
                    </div>{" "}
                  </div>
                  <div
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
                    </div>{" "}
                  </div>
                  <div
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
                    </div>{" "}
                  </div>
                  <div
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
                  </div>
                </div>
                <div className="promotion-buttons">
                  <div
                    mode="md"
                    id="tower"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145463')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474')",
                        }}
                      ></div>
                      Tower Legends
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="jili-204"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763420')",
                        backgroundColor: "rgb(232, 222, 222)",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431')",
                        }}
                      ></div>
                      Color Game
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="6"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Limbo.webp')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125')",
                        }}
                      ></div>
                      Limbo
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="6"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Mines.webp')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png')",
                        }}
                      ></div>
                      Mines
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="77hj"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199645')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647')",
                        }}
                      ></div>
                      Aura
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="6"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963116')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125')",
                        }}
                      ></div>
                      Aviator
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="1"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275808')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817')",
                        }}
                      ></div>
                      Evolution
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="2"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352020')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029')",
                        }}
                      ></div>
                      Sportsbook
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="3"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704269')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279')",
                        }}
                      ></div>
                      Live Casinos
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="4"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799120')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122')",
                        }}
                      ></div>
                      e-Cricket
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="5"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853715')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726')",
                        }}
                      ></div>
                      Card Games
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="76"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015298')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300')",
                        }}
                      ></div>
                      Slot Games
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="533"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077487')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489')",
                        }}
                      ></div>
                      Multiplayer Games
                    </div>{" "}
                  </div>
                  <div
                    mode="md"
                    id="kjhg"
                    className="promotion-button scrollItem md button button-solid ion-activatable ion-focusable hydrated"
                  >
                    <div
                      className="promotion-button__content"
                      style={{
                        backgroundImage:
                          "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252625')",
                      }}
                    >
                      <div
                        className="promotion-button__icon"
                        style={{
                          backgroundImage:
                            "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627')",
                        }}
                      ></div>
                      Fishing games
                    </div>
                  </div>
                </div>
              </div>
              <div className="betaClass">
                <button className="betaClassContainer">
                  <span className="betaClassSpan"> 🎉🎉</span>
                  <span style={{ marginLeft: "2px", fontStyle: "italic" }}>
                    <u>Click here</u> to explore our newly launched ui updates
                    ✨
                  </span>
                  <span className="betaClassSpan">🚀</span>
                </button>
              </div>

              <div
                className="inplay-content md item-group-md item hydrated"
                role="group"
                style={{ display: "block" }}
              >
                <div className="inplay-popular-header inplay-header-color">
                  <div className="inplay-popular-header__logo">
                    <i className="inplay-popular-header__logo-icon inplay-header-icon"></i>
                    <span className="inplay-popular-header__logo-text">
                      In Play
                    </span>
                  </div>
                  <div className="inplay-popular-header__bets">
                    <span className="inplay-popular-header__bets-text">
                      Open Bets
                    </span>
                    <span className="inplay-popular-header__bets-count">0</span>
                  </div>
                </div>
                <div className="inplay-item-list md list-md hydrated">
                  <div className="inplay-item-list__header md hydrated">
                    <div className="inplay-item-list__header-content">
                      <div className="inplay-item-list__header-logo">
                        <i className="inplay-content__logo-icon inplay-content__logo-icon--cricket inplay-color-icon"></i>
                        Cricket
                      </div>
                      <div className="inplay-item-list__header-title">
                        <span>1</span>
                        <span>X</span>
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="score-content empty">
                            <div className="date-content">
                              <span className="inPlayDate-content__date">
                                Today
                              </span>
                              <span className="inPlayDate-content__time">
                                07:30
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Islamabad United Srl</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Peshawar Zalmi SRL</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price"></div>{" "}
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button back-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">15</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="inplay-item-list_exchangeGames md list-md hydrated">
                  <div className="inplay-item-list-exchange__header md hydrated">
                    <div className="inplay-item-list-exchange__header-content">
                      <div className="inplay-item-list-exchange__header-logo">
                        <i className="inplay-content__logo-icon inplay-content__logo-icon--exchange-games inplay-color-icon"></i>
                        <span>Indian Card Games</span>
                      </div>
                    </div>
                  </div>
                  <div className="exchangeGames-content">
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                    <div className="exchangeGames-item">
                      <div
                        className="exchangeGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>
                <div className="inplay-item-list_popularGames md list-md hydrated">
                  <div className="inplay-item-list-exchange__header md hydrated">
                    <div className="inplay-item-list-exchange__header-content">
                      <div className="inplay-item-list-exchange__header-logo">
                        <i className="inplay-content__logo-icon inplay-content__logo-icon--exchange-games inplay-color-icon"></i>
                        Popular Games
                      </div>
                    </div>
                  </div>
                  <div className="popularGames-content">
                    <div className="popularGames-item" id="jili-75">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">Ak47</span>
                      </div>
                    </div>
                    <div className="popularGames-item" id="EURASIAN-24">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Neptune Treasure Bingo
                        </span>
                      </div>
                    </div>
                    <div className="popularGames-item" id="jili-20">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Bombing Fishing
                        </span>
                      </div>
                    </div>
                    <div className="popularGames-item" id="MPLAY-ludo-express">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Ludo Express
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-blackjack-lobby"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Blackjack
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-blackjack-nvphyyqemn6f54nt"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Blackjack
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-baccarat-nvpha2samn6f5lbv"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          No Comm Speed Baccarat
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-roulette-otctxzr5fjyggijz"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">Roulette</span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-dealnodeal-dealnodeal000001"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Deal No Deal
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-rng~dragontiger-rng~dragontiger0"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Dragon Tiger
                        </span>
                      </div>
                    </div>
                    <div
                      className="popularGames-item"
                      id="EVOLUTION-gonzotreasurehunt-GonzoTH000000001"
                    >
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Gonzo’s Treasure Hunt
                        </span>
                      </div>
                    </div>
                    <div className="popularGames-item" id="KM-Minesweeper">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Minesweeper
                        </span>
                      </div>
                    </div>
                    <div className="popularGames-item" id="jili-204">
                      <div
                        className="popularGames-img-body"
                        style={{
                          backgroundImage:
                            "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                        }}
                      >
                        <span className="popularGames-item-name">
                          Color Prediction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inplay-item-list_casino md list-md hydrated">
                    <div className="inplay-item-list-casino__header md hydrated">
                      <div className="iinplay-item-list-casino__header-content">
                        <div className="inplay-item-list-casino__header-logo">
                          <i className="inplay-content__logo-icon inplay-content__logo-icon--casino inplay-color-icon"></i>
                          Casino
                        </div>
                      </div>
                    </div>
                    <div className="casino-content">
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                      <div className="casino-item">
                        <div
                          className="casino-img-body"
                          style={{
                            backgroundImage:
                              "url('https://promomaterial.imgix.net/inPlaySlidingBanners/MadeInIndiaRohit-1718966368863')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="inplay-content md item-group-md item hydrated"
                role="group"
              >
                <div className="inplay-popular-header popular-header-color">
                  <div className="inplay-popular-header__logo">
                    <i className="inplay-popular-header__logo-icon popular-header-icon"></i>
                    <span className="inplay-popular-header__logo-text">
                      Upcoming Events
                    </span>
                  </div>
                </div>
                <div className="inplay-item-list md list-md hydrated">
                  <div className="inplay-item-list__header md hydrated">
                    <div className="inplay-item-list__header-content">
                      <div className="inplay-item-list__header-logo">
                        <i className="inplay-content__logo-icon inplay-content__logo-icon--cricket popular-color-icon"></i>
                        Cricket
                      </div>
                      <div className="inplay-item-list__header-title">
                        <span>1</span>
                        <span>X</span>
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">Today</span>
                            <span className="date-content__time">00:20</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Sri Lanka</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>India</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.1</div>
                                  <div className="odd-button__volume">
                                    7,940
                                  </div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.31</div>
                                  <div className="odd-button__volume">
                                    38,961
                                  </div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.2</div>
                                  <div className="odd-button__volume">109</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.32</div>
                                  <div className="odd-button__volume">
                                    20,819
                                  </div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">Today</span>
                            <span className="date-content__time">00:52</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Trent Rockets Women</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>London Spirit Women</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active change-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.99</div>
                                  <div className="odd-button__volume">25</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active change-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.96</div>
                                  <div className="odd-button__volume">554</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active change-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.06</div>
                                  <div className="odd-button__volume">527</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active change-color">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.02</div>
                                  <div className="odd-button__volume">59</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">Today</span>
                            <span className="date-content__time">00:53</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>West Indies</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>South Africa</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.6</div>
                                  <div className="odd-button__volume">165</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.1</div>
                                  <div className="odd-button__volume">603</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.16</div>
                                  <div className="odd-button__volume">259</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.7</div>
                                  <div className="odd-button__volume">546</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.15</div>
                                  <div className="odd-button__volume">182</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.18</div>
                                  <div className="odd-button__volume">712</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">Today</span>
                            <span className="date-content__time">00:52</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Trent Rockets</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>London Spirit</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.74</div>
                                  <div className="odd-button__volume">17</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.28</div>
                                  <div className="odd-button__volume">50</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.77</div>
                                  <div className="odd-button__volume">8</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">-</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.36</div>
                                  <div className="odd-button__volume">13</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
                <div className="inplay-item-list md list-md hydrated">
                  <div className="inplay-item-list__header md hydrated">
                    <div className="inplay-item-list__header-content">
                      <div className="inplay-item-list__header-logo">
                        <i className="inplay-content__logo-icon inplay-content__logo-icon--football popular-color-icon"></i>
                        Football
                      </div>
                      <div className="inplay-item-list__header-title">
                        <span>1</span>
                        <span>X</span>
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              20/08/2024
                            </span>
                            <span className="date-content__time">00:30</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Leicester</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Tottenham</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">5.1</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.5</div>
                                  <div className="odd-button__volume">5</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.69</div>
                                  <div className="odd-button__volume">7</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">5.2</div>
                                  <div className="odd-button__volume">8</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.6</div>
                                  <div className="odd-button__volume">3</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.71</div>
                                  <div className="odd-button__volume">6</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              18/08/2024
                            </span>
                            <span className="date-content__time">21:00</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Chelsea</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Man City</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4</div>
                                  <div className="odd-button__volume">48</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.2</div>
                                  <div className="odd-button__volume">3</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.88</div>
                                  <div className="odd-button__volume">46</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.2</div>
                                  <div className="odd-button__volume">15</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.3</div>
                                  <div className="odd-button__volume">28</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.92</div>
                                  <div className="odd-button__volume">50</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              18/08/2024
                            </span>
                            <span className="date-content__time">18:30</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Brentford</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Crystal Palace</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.56</div>
                                  <div className="odd-button__volume">54</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.5</div>
                                  <div className="odd-button__volume">92</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.96</div>
                                  <div className="odd-button__volume">22</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.6</div>
                                  <div className="odd-button__volume">24</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.6</div>
                                  <div className="odd-button__volume">65</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3</div>
                                  <div className="odd-button__volume">40</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              24/08/2024
                            </span>
                            <span className="date-content__time">19:00</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Dortmund</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Eintracht Frankfurt</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.73</div>
                                  <div className="odd-button__volume">69</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4</div>
                                  <div className="odd-button__volume">67</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4</div>
                                  <div className="odd-button__volume">67</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.85</div>
                                  <div className="odd-button__volume">60</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.8</div>
                                  <div className="odd-button__volume">3</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.9</div>
                                  <div className="odd-button__volume">37</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              19/08/2024
                            </span>
                            <span className="date-content__time">01:30</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Lecce</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Atalanta</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.3</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.6</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">1.94</div>
                                  <div className="odd-button__volume">8</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4.7</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.9</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2</div>
                                  <div className="odd-button__volume">5</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              18/08/2024
                            </span>
                            <span className="date-content__time">20:30</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Rennes</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Lyon</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.28</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.4</div>
                                  <div className="odd-button__volume">77</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.05</div>
                                  <div className="odd-button__volume">32</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.46</div>
                                  <div className="odd-button__volume">46</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">4</div>
                                  <div className="odd-button__volume">46</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.35</div>
                                  <div className="odd-button__volume">33</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              20/08/2024
                            </span>
                            <span className="date-content__time">01:00</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Villarreal</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Atletico Madrid</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3</div>
                                  <div className="odd-button__volume">5</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.45</div>
                                  <div className="odd-button__volume">45</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.36</div>
                                  <div className="odd-button__volume">3</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.25</div>
                                  <div className="odd-button__volume">5</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.9</div>
                                  <div className="odd-button__volume">3</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.5</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inplay-item">
                    <div className="inplay-item__content">
                      <div className="inplay-item__row">
                        <div className="inplay-item__score">
                          <div className="date-content">
                            <span className="date-content__date">
                              19/08/2024
                            </span>
                            <span className="date-content__time">22:30</span>
                          </div>
                        </div>
                        <div className="inplay-item__players">
                          <span className="inplay-item__player">
                            <span>Valladolid</span>
                          </span>
                          <span className="inplay-item__player">
                            <span>Espanyol</span>
                          </span>
                        </div>
                        <div className="inplay-item__back">
                          <div className="inplay-item__back-inner">
                            <div className="inplay-item__back-inner inplay-item__back-inner-left">
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.46</div>
                                  <div className="odd-button__volume">2</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.2</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button back-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.2</div>
                                  <div className="odd-button__volume">35</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">2.56</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.45</div>
                                  <div className="odd-button__volume">4</div>
                                </span>
                              </span>
                              <span className="odd-button lay-color not-active">
                                <span className="odd-button__inner odd-button__inner--centered">
                                  <div className="odd-button__price">3.45</div>
                                  <div className="odd-button__volume">2</div>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLayout;
