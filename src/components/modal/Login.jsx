import { useRef } from "react";
import assets from "../../assets";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../utils/handleRandomToken";
import { settings } from "../../api";
import handleEncryptData from "../../utils/handleEncryptData";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = ({ setShowLoginModal }) => {
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    setShowLoginModal(false);
  });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "8888884000",
      password: "avinya123",
    },
  });

  const onSubmit = async ({ username, password }) => {
    const generatedToken = handleRandomToken();
    const loginData = {
      username: username,
      password: password,
      token: generatedToken,
      site: settings.siteUrl,
      b2c: true,
    };
    const encryptedData = handleEncryptData(loginData);
    const result = await handleLogin(encryptedData).unwrap();
    if (result.success) {
      const token = result?.result?.token;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      if (token && user) {
        setShowLoginModal(false);
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  return (
    <div className="loginPopUp">
      <div className="pop-up_wrapper false">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pop-up false"
          ref={loginRef}
        >
          <div
            onClick={() => setShowLoginModal(false)}
            className="closePopUpButton"
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15.5" cy="15.5" r="15.5" fill="#142326"></circle>
              <path
                d="M11.2045 10.0005C10.9659 10.0008 10.7328 10.0722 10.5349 10.2057C10.3371 10.3391 10.1835 10.5285 10.0938 10.7496C10.0042 10.9707 9.98244 11.2136 10.0314 11.4471C10.0804 11.6806 10.1979 11.8943 10.3689 12.0607L13.7205 15.4122L10.3689 18.7638C10.2538 18.8744 10.1618 19.0068 10.0985 19.1534C10.0351 19.2999 10.0017 19.4576 10.0001 19.6173C9.99844 19.7769 10.0287 19.9353 10.089 20.0831C10.1494 20.2309 10.2386 20.3652 10.3515 20.4781C10.4644 20.591 10.5987 20.6802 10.7465 20.7406C10.8943 20.8009 11.0527 20.8312 11.2123 20.8296C11.372 20.8279 11.5297 20.7945 11.6763 20.7311C11.8228 20.6678 11.9552 20.5758 12.0658 20.4607L15.4174 17.1091L18.7689 20.4607C18.8795 20.5758 19.012 20.6678 19.1585 20.7311C19.3051 20.7945 19.4628 20.8279 19.6224 20.8296C19.7821 20.8312 19.9405 20.801 20.0883 20.7406C20.2361 20.6803 20.3704 20.591 20.4833 20.4781C20.5962 20.3652 20.6854 20.2309 20.7457 20.0831C20.8061 19.9353 20.8363 19.7769 20.8347 19.6173C20.8331 19.4577 20.7996 19.2999 20.7363 19.1534C20.6729 19.0068 20.581 18.8744 20.4658 18.7638L17.1143 15.4122L20.4658 12.0607C20.6392 11.8921 20.7577 11.6751 20.8056 11.4381C20.8536 11.2011 20.8288 10.9551 20.7345 10.7324C20.6403 10.5097 20.481 10.3206 20.2774 10.19C20.0739 10.0595 19.8357 9.99339 19.5939 10.0005C19.2822 10.0098 18.9863 10.1401 18.7689 10.3638L15.4174 13.7154L12.0658 10.3638C11.9539 10.2487 11.8199 10.1573 11.672 10.0949C11.524 10.0325 11.3651 10.0004 11.2045 10.0005V10.0005Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div className="pop-up-content">
            <div className="tabButtons">
              <div className="tabButtons__button">Sign up</div>
              <div className="tabButtons__button inActiveRight">Log in</div>
            </div>
          </div>
          <div className="logo"></div>
          <div className="loginPopUpContainer-login">
            <div className="login-content__list md list-md hydrated">
              <div className="b2c_login">
                <div
                  style={{ backgroundColor: "#fff", marginBottom: "10px" }}
                  className="overflow-visible item md in-list hydrated"
                >
                  <input
                    {...register("username", { required: true })}
                    className="loginInput "
                    placeholder="Enter Username/Mobile Number"
                    style={{ backgroundColor: "#fff", padding: "10px 10px" }}
                    type="text"
                  />
                </div>

                <div
                  style={{ backgroundColor: "#fff" }}
                  className="item-interactive item-input item-has-placeholder item md in-list hydrated item-has-value"
                >
                  <div className="loginInput remove-pad-start sc-ion-input-md-h sc-ion-input-md-s md hydrated has-value">
                    <input
                      {...register("password", { required: true })}
                      className="loginInput"
                      placeholder="Password"
                      style={{ backgroundColor: "#fff", padding: "10px 10px" }}
                      type="password"
                    />
                  </div>
                  <div className="login_icons eye "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pop-up-content__buttons pop-up-content__buttons-new forgot">
            <span>Forgot password?</span>
          </div>
          <div>
            <div>
              <div
                className="grecaptcha-badge"
                style={{
                  width: "256px",
                  height: "60px",
                  display: "block",
                  transition: "right 0.3s",
                  position: "fixed",
                  bottom: "14px",
                  right: "-186px",
                  boxShadow: "gray 0px 0px 5px",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div className="grecaptcha-logo">
                  <iframe
                    title="reCAPTCHA"
                    width="256"
                    height="60"
                    role="presentation"
                    name="a-szkni52eqv0v"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdTTM0UAAAAAELLYim4P-yClP7aRFBdCrTk1ktS&amp;co=aHR0cHM6Ly91bmljb24zNjUuY29tOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=hfUfsXWZFeg83qqxrK27GB8P&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=2t1gg0ahn782"
                  ></iframe>
                </div>
                <div className="grecaptcha-error"></div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{
                    width: "250px",
                    height: "40px",
                    border: "1px solid rgb(193, 193, 193)",
                    margin: "10px 25px",
                    padding: "0px",
                    resize: "none",
                    display: "none",
                  }}
                ></textarea>
              </div>
              <iframe style={{ display: "none" }}></iframe>
            </div>
          </div>
          <div className="pop-up-content__buttons">
            <div className="pushable">
              <span className="shadow"></span>
              <span className="edge "></span>
              <button type="submit" className="front refreshBtn login">
                Log in
              </button>
            </div>
          </div>
          <div className="registerWith-content">
            <div className="register-chose">Or Log in with</div>
            <div className="registerWith-content-btns">
              <div className="register-button">
                <img className="icon" src={assets.google} alt="" />
                <span className="register-button-link">Google</span>
              </div>
              <div className="register-button">
                <img className="icon" src={assets.whatsApp} alt="" />
                <span className="register-button-link">Whatsapp</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
