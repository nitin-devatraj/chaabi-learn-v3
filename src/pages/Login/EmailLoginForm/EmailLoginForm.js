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
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showEmailHelperText, setShowEmailHelperText] = useState(false);

  // this state variable holds the user entered "password"
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPasswordHelperText, setShowPasswordHelperText] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setIsEmailValid(true);
    setShowEmailHelperText(false);
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setIsPasswordValid(true);
    setShowPasswordHelperText(false);
    setPassword(event.target.value);
  };

  const isEnteredEmailValid = (email) => {
    return (
      email.trim() !== "" &&
      email.indexOf("@") !== -1 &&
      email.indexOf(".") !== -1
    );
  };

  const isEnteredPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  // const emailLoginSubmitHandler = () => {
  //   if (!isEnteredEmailValid(email)) {
  //     setIsEmailValid(false);
  //     setShowEmailHelperText(true);
  //   } else if (!isEnteredPasswordValid(password)) {
  //     setIsPasswordValid(false);
  //     setShowPasswordHelperText(true);
  //   } else {
  //     navigate("/dashboard");
  //   }
  // };

  // this function is triggered when the user hits submit after entering credentials
  const emailLoginSubmitHandler = () => {
    const isEmailValid = isEnteredEmailValid(email);
    const isPasswordValid = isEnteredPasswordValid(password);

    setIsEmailValid(isEmailValid);
    setShowEmailHelperText(!isEmailValid);
    setIsPasswordValid(isPasswordValid);
    setShowPasswordHelperText(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      navigate("/dashboard");
    }
  };

  // this function is triggered when the user hits "forgot password?"
  const forgotPasswordHandler = () => {
    setisForgotPasswordClicked(true);
  };

  // this function is triggered when the user hits submit after entering email (password forgot mode)
  const forgotPasswordSubmitHandler = () => {
    if (!isEnteredEmailValid(email)) {
      setIsEmailValid(false);
      setShowEmailHelperText(true);
    } else {
      resetPassword(true);
    }
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
          type="text"
          label="Email"
          placeholder="enter your email address"
          onChange={emailChangeHandler}
          value={email}
          helperText="email is required - should include @ and ."
          showHelperText={showEmailHelperText}
          isValid={isEmailValid}
        />

        {isForgotPasswordClicked === false && (
          <div>
            <TextInput
              type="password"
              label="Password"
              placeholder="enter your password"
              onChange={passwordChangeHandler}
              value={password}
              helperText="password is required - min 8 digits"
              showHelperText={showPasswordHelperText}
              isValid={isPasswordValid}
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
