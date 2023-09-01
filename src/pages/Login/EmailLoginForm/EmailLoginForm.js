import React, { useState } from "react";
import styles from "./EmailLoginForm.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import TextInput from "../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function EmailLoginForm({ onResetPassword }) {
  const [isForgotPasswordClicked, setisForgotPasswordClicked] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailLoginSubmitHandler = () => {
    navigate("/dashboard");
  };

  const forgotPasswordHandler = () => {
    setisForgotPasswordClicked(true);
  };

  const forgotLoginSubmitHandler = () => {
    onResetPassword(true);
  };

  return (
    <div className={styles.emailLoginFormContainer}>
      <h5 className={`${typography.h5Bold} ${styles.title}`}>
        {isForgotPasswordClicked === false
          ? " Login with Email"
          : "Forgot Password?"}
      </h5>
      <TextInput
        type="email"
        label="Email"
        placeholder="enter your email address"
        onChange={emailChangeHandler}
        value={email}
      />
      {isForgotPasswordClicked === false && (
        <div>
          <TextInput
            type="password"
            label="Password"
            placeholder="enter your password"
            onChange={passwordChangeHandler}
            value={password}
          />
          <span
            className={`${styles.forgotPassword} ${typography.t4Lite}`}
            onClick={forgotPasswordHandler}
          >
            Forgot password ?
          </span>
        </div>
      )}
      {isForgotPasswordClicked === false ? (
        <PrimaryButton onClick={emailLoginSubmitHandler}>Submit</PrimaryButton>
      ) : (
        <PrimaryButton onClick={forgotLoginSubmitHandler}>Submit</PrimaryButton>
      )}
    </div>
  );
}

export default EmailLoginForm;
