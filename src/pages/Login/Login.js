import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/icons/logo.png";
import LandingPage from "./LandingPage/LandingPage";
import MobileLoginForm from "./MobileLoginForm/MobileLoginForm";
import EmailLoginForm from "./EmailLoginForm/EmailLoginForm";
import ResetPasswordForm from "./EmailLoginForm/ResetPasswordForm/ResetPasswordForm";

function Login() {
  const [defaultLoginMethod, setDefaultLoginMethod] = useState("mobile");
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);
  const [showResetPasswordForm, setResetPasswordForm] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <img src={logo} alt="#" className={styles.logo} />
      {isLoginBtnClicked === false && (
        <LandingPage
          loginMethod={defaultLoginMethod}
          isLoginBtnClick={setIsLoginBtnClicked}
        />
      )}

      {isLoginBtnClicked === true && defaultLoginMethod === "mobile" && (
        <MobileLoginForm />
      )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === false &&
        defaultLoginMethod === "email" && (
          <EmailLoginForm resetPassword={setResetPasswordForm} />
        )}

      {isLoginBtnClicked === true &&
        showResetPasswordForm === true &&
        defaultLoginMethod === "email" && <ResetPasswordForm />}
    </div>
  );
}

export default Login;
