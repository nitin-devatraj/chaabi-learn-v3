import React, { useState } from "react";
import styles from "./EmailLoginForm.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";
import TextInput from "../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function EmailLoginForm({ resetPassword }) {
  const [isForgotPasswordClicked, setisForgotPasswordClicked] = useState(false);
  // this state variable holds the user entered "email"
  const [email, setEmail] = useState("");
  // this state variable holds the user entered "password"
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  // this function is triggered when the user hits submit after entering credentials
  const emailLoginSubmitHandler = () => {
    navigate("/dashboard");
  };

  // this function is triggered when the user hits "forgot password?"
  const forgotPasswordHandler = () => {
    setisForgotPasswordClicked(true);
  };

  // this function is triggered when the user hits submit after entering email (password forgot mode)
  const forgotPasswordSubmitHandler = () => {
    resetPassword(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className={styles.emailLoginFormContainer}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.form}>
        <h5 className={typography.h5Bold}>
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
              className={styles.forgotPassword}
              onClick={forgotPasswordHandler}
            >
              Forgot password ?
            </span>
          </div>
        )}
      </div>

      {isForgotPasswordClicked === false ? (
        <PrimaryButton onClick={emailLoginSubmitHandler} type="submit">
          Submit
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={forgotPasswordSubmitHandler} type="submit">
          Submit
        </PrimaryButton>
      )}
    </form>
  );
}

export default EmailLoginForm;
