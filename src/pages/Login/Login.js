import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/icons/pages/login/logo.png";
import LandingPage from "./LandingPage/LandingPage";
import MobileLoginForm from "./MobileLoginForm/MobileLoginForm";
import EmailLoginForm from "./EmailLoginForm/EmailLoginForm";
import ResetPasswordForm from "./EmailLoginForm/ResetPasswordForm/ResetPasswordForm";

function Login() {
  //this state variable holds the default login method, set the default login method here, can be mobile or email
  // eslint-disable-next-line
  const [defaultLoginMethod, setDefaultLoginMethod] = useState("mobile"); //

  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);
  const [showResetPasswordForm, setResetPasswordForm] = useState(false);

  return (
    <div className={styles.loginContainer}>
      <img src={logo} alt="#" className={styles.logo} />

      {/* this is default landing page shown on login page (minus the above brand logo), along with action button (login with mobile/email button)  */}
      {isLoginBtnClicked === false && (
        <LandingPage
          loginMethod={defaultLoginMethod}
          isLoginBtnClick={setIsLoginBtnClicked}
        />
      )}

      {/* the below compoennt renders the mobile login screen (along with otp screen + action button)  */}
      {isLoginBtnClicked === true && defaultLoginMethod === "mobile" && (
        <MobileLoginForm />
      )}

      {/* the component below renders the email login screen along with action button */}
      {isLoginBtnClicked === true &&
        showResetPasswordForm === false &&
        defaultLoginMethod === "email" && (
          <EmailLoginForm resetPassword={setResetPasswordForm} />
        )}

      {/* the component below renders the password reset form along with action button*/}
      {isLoginBtnClicked === true &&
        showResetPasswordForm === true &&
        defaultLoginMethod === "email" && <ResetPasswordForm />}
    </div>
  );
}

export default Login;
