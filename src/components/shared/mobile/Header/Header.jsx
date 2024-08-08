import { useNavigate } from "react-router-dom";
import assets from "../../../../assets";


const Header = () => {
  const navigate = useNavigate()
    return (
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
                      <div onClick={()=> navigate('/')} className="toolbar-logo"></div>
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
    );
};

export default Header;