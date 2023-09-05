import React, { useState } from "react";
import styles from "./EmailLoginForm.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import TextInput from "../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function EmailLoginForm({ resetPassword }) {
  const [isForgotPasswordClicked, setisForgotPasswordClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const forgotPasswordSubmitHandler = () => {
    resetPassword(true);
  };

  return (
    <div className={styles.emailLoginFormContainer}>
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
        <PrimaryButton onClick={emailLoginSubmitHandler}>Submit</PrimaryButton>
      ) : (
        <PrimaryButton onClick={forgotPasswordSubmitHandler}>
          Submit
        </PrimaryButton>
      )}
    </div>
  );
}

export default EmailLoginForm;
