import React, { useState } from "react";
import styles from "./Login.module.scss";
import colorTheme from "../../global-styles/color-theme.module.scss";
import logo from "../../assets/login-page-icons/logo.png";
import Banner from "./Banner/Banner";
import MobileLoginForm from "./MobileLoginForm/MobileLoginForm";
import EmailLoginForm from "./EmailLoginForm/EmailLoginForm";
import ResetPasswordForm from "./EmailLoginForm/ResetPasswordForm/ResetPasswordForm";

function Login() {
  const [defaultLoginMethod, setDefaultLoginMethod] = useState("email");
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
        <MobileLoginForm />
      )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === false &&
        defaultLoginMethod === "email" && (
          <EmailLoginForm onResetPassword={setResetPasswordForm} />
        )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === true &&
        defaultLoginMethod === "email" && <ResetPasswordForm />}
    </div>
  );
}

export default Login;
