import React, { useState } from "react";
import styles from "./Login.module.scss";
import colorTheme from "../../global-styles/color-theme.module.scss";
import logo from "../../assets/login-page-icons/logo.png";
import Banner from "./Banner/Banner";
import MobileLogin from "./MobileLogin/MobileLogin";
import EmailLogin from "./EmailLogin/EmailLogin";
import ResetPasswordForm from "./EmailLogin/ResetPasswordForm/ResetPasswordForm";

function Login() {
  const [defaultLoginMethod, setDefaultLoginMethod] = useState("mobile");
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);
  const [showResetPasswordForm, setResetPasswordForm] = useState(false);

  return (
    <div className={`${styles.loginContainer} ${colorTheme.lightThemeRegular}`}>
      <img src={logo} alt="#" className={styles.logo} />
      {isLoginBtnClicked === false && (
        <Banner
          loginMethod={defaultLoginMethod}
          onLoginBtnClick={setIsLoginBtnClicked}
        />
      )}

      {isLoginBtnClicked === true && defaultLoginMethod === "mobile" && (
        <MobileLogin />
      )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === false &&
        defaultLoginMethod === "email" && (
          <EmailLogin onResetPassword={setResetPasswordForm} />
        )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === true &&
        defaultLoginMethod === "email" && <ResetPasswordForm />}
    </div>
  );
}

export default Login;
