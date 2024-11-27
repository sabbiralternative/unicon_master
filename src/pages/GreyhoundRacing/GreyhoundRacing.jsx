/* eslint-disable react/no-unknown-property */
import "../../assets/css/horseGreyhound.css";
import { useSelector } from "react-redux";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";

const GreyhoundRacing = () => {
  const { showAppPopUp } = useSelector((state) => state.state);
  return (
    <div
      className={`flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 ${
        showAppPopUp ? "pt-[160px]" : "pt-[90px]"
      }`}
    >
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div
            _ngcontent-wne-c149=""
            className="col-sm-12 col-md-12 col-lg-12 col-xl-12"
          >
            <div
              _ngcontent-wne-c149=""
              className="card m-1"
              style={{ borderRadius: "2px", boxSizing: "border-box" }}
            >
              <div _ngcontent-wne-c149="" className="card-header">
                <div
                  _ngcontent-wne-c149=""
                  className="d-flex justify-content-between align-items-center"
                  style={{ padding: "0 8px" }}
                >
                  <div _ngcontent-wne-c149="" className="p-1">
                    <span
                      _ngcontent-wne-c149=""
                      className="match_card_heading heading"
                    >
                      Horse Racing
                    </span>
                  </div>
                  <div _ngcontent-wne-c149="" className="text-right">
                    <span
                      _ngcontent-wne-c149=""
                      style={{ padding: "2px" }}
                      className="ng-star-inserted"
                    >
                      <button _ngcontent-wne-c149="" className="btn today">
                        Today
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <ul
                _ngcontent-wne-c149=""
                ngbnav=""
                className="nav-tabs nav"
                role="tablist"
              >
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link active"
                    aria-labelledby="NZ"
                    id="ngb-nav-9"
                    role="tab"
                    aria-controls="ngb-nav-9-panel"
                    aria-selected="true"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo NZ"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      NZ{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="AU"
                    id="ngb-nav-10"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo AU"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      AU{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="ZA"
                    id="ngb-nav-11"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo ZA"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      ZA{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="GB"
                    id="ngb-nav-12"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo GB"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      GB{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="FR"
                    id="ngb-nav-13"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo FR"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      FR{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="IE"
                    id="ngb-nav-14"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo IE"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      IE{" "}
                    </span>
                  </a>
                </li>
                <li
                  _ngcontent-wne-c149=""
                  className="navItems nav-item ng-star-inserted"
                >
                  <a
                    _ngcontent-wne-c149=""
                    href=""
                    ngbnavlink=""
                    className="race-region nav-link"
                    aria-labelledby="US"
                    id="ngb-nav-15"
                    role="tab"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span
                      _ngcontent-wne-c149=""
                      className="flag_logo US"
                    ></span>
                    <span _ngcontent-wne-c149="" className="city">
                      {" "}
                      US{" "}
                    </span>
                  </a>
                </li>
              </ul>
              <div _ngcontent-wne-c149="" className="mt-0 tab-content">
                <div
                  ngbnavpane=""
                  className="tab-pane fade show active ng-star-inserted"
                  id="ngb-nav-9-panel"
                  role="tabpanel"
                  aria-labelledby="ngb-nav-9"
                >
                  <div
                    _ngcontent-wne-c149=""
                    className="row mx-0 item-box px-0 py-1 ng-star-inserted"
                  >
                    <div _ngcontent-wne-c149="" className="col-md-2">
                      <span _ngcontent-wne-c149="" className="trackName">
                        Ascot
                      </span>
                    </div>
                    <div _ngcontent-wne-c149="" className="col-md-10">
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          13:08
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    _ngcontent-wne-c149=""
                    className="row mx-0 item-box px-0 py-1 ng-star-inserted"
                  >
                    <div _ngcontent-wne-c149="" className="col-md-2">
                      <span _ngcontent-wne-c149="" className="trackName">
                        Otaki
                      </span>
                    </div>
                    <div _ngcontent-wne-c149="" className="col-md-10">
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          05:16
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          05:52
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          06:27
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          07:02
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          07:37
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          08:08
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          08:42
                        </span>
                      </span>
                      <span _ngcontent-wne-c149="" className="ng-star-inserted">
                        <span
                          _ngcontent-wne-c149=""
                          className="startTime p-2"
                          tabindex="0"
                        >
                          09:13
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default GreyhoundRacing;
