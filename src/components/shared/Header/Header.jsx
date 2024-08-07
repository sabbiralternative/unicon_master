import { useDispatch, useSelector } from "react-redux";
import { setGroupType } from "../../../redux/features/stateSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../../modal/Login";

const Header = () => {
  const [showLoginModal,setShowLoginModal] = useState(false)
  const { group } = useSelector((state) => state?.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
  <>
  {
    showLoginModal && (
      <Login setShowLoginModal={setShowLoginModal} />
    )
  }
    <header
      role="banner"
      className="md header-md header-collapse-none hydrated"
    >
      <div></div>
      <div className="headerDesktop">
        <div className="headerDesktop-content">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              dispatch(setGroupType(0));
            }}
            className="headerDesktop-content__logo"
          >
            <div className="headerDesktop-content__logo-img" alt=""></div>
          </div>
          <div className="headerDesktop-content__date">
            <span className="date-small">
              Aug 3th, 2024 <span className="date-big">14:34:34</span>
            </span>
            <span className="date-small__yellow">
              <span className="date-small__yellow-symbol">(</span>
              <span className="date-small__yellow-time">+05:30</span>
              <span className="date-small__yellow-arrow"></span>
              <span className="date-small__yellow-symbolright">)</span>
            </span>
            <div className="timeutc inactive">
              <div className="poligon">
                <img src="static/media/poligonIcon.acf45dfe.svg" alt="" />
              </div>
              <div role="radiogroup" className="md hydrated">
                <div className="timeList">
                  <div className="TimeSettings__option TimeSettings__option--first item md ion-activatable ion-focusable hydrated">
                    <div className="timeList-text">
                      System time - (GMT +00:00)
                    </div>
                    <div
                      mode="md"
                      className="radioTime md in-item interactive hydrated"
                      aria-checked="false"
                      role="radio"
                    ></div>
                  </div>
                  <div className="TimeSettings__option item-radio-checked item md ion-activatable ion-focusable hydrated">
                    <div className="timeList-text">
                      Your device time - (GMT +05:30)
                    </div>
                    <ion-radio
                      mode="md"
                      className="radioTime md in-item interactive radio-checked hydrated"
                      aria-checked="true"
                      role="radio"
                      tabindex="0"
                    ></ion-radio>
                  </div>
                  <div className="TimeSettings__option TimeSettings__option--last item md ion-activatable ion-focusable hydrated">
                    <div className="timeList-text">
                      India Standard time - (GMT +05:30)
                    </div>
                    <ion-radio
                      mode="md"
                      className="radioTime md in-item interactive hydrated"
                      aria-checked="false"
                      role="radio"
                      tabindex="-1"
                    ></ion-radio>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="headerDesktop-content__search">
            <img
              className="search-event__img"
              src="static/media/searchIconDesk.564d3327.svg"
              alt=""
            />
            <div className="form-row">
              <input
                type="text"
                id="form-email"
                className="form-textbox"
                required=""
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid rgb(221, 221, 221)",
                  borderRadius: "3px",
                }}
              />
              <label htmlFor="form-email" className="form-label">
                Search Events
              </label>
            </div>
          </div>
          <div className="headerDesktop-content__account">
            <div onClick={()=> setShowLoginModal(true)} className="text not-auth">
              <div className="login-icon-desktop">
                <img src="static/media/login.ff1fb28a.svg" alt="login" />
              </div>
              Log in
            </div>
            <div className="text not-auth">
              <div className="signUp-icon-desktop"></div>Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="headerDeskNav">
        <div className="headerDeskNav-content">
          <div className="headerDeskNav-content__list">
            <div
              onClick={() => dispatch(setGroupType(0))}
              style={{ color: `${group === 0 ? "#c95c54" : ""}` }}
              className="list-item"
            >
              sportsbook
            </div>
            <div
              style={{ color: `${group === 4 ? "#c95c54" : ""}` }}
              onClick={() => {
                navigate('/')
                dispatch(setGroupType(4))
              }}
              className="list-item"
            >
              Cricket
            </div>
            <div
              style={{ color: `${group === 1 ? "#c95c54" : ""}` }}
              onClick={() => {
                navigate('/')
                dispatch(setGroupType(1))
              }}
              className="list-item"
            >
              Football
            </div>
            <div
              style={{ color: `${group === 2 ? "#c95c54" : ""}` }}
              onClick={() => {
                navigate('/')
                dispatch(setGroupType(2))
              }}
              className="list-item"
            >
              Tennis
            </div>
            <div className="list-item">Horse Racing</div>
            <div className="list-item">Greyhound Racing</div>
            <div className="list-item">Indian Card Games</div>
            <div className="list-item">live casino</div>
            <div className="list-item">slots games</div>
          </div>
        </div>
      </div>
    </header>
  </>
  );
};

export default Header;
