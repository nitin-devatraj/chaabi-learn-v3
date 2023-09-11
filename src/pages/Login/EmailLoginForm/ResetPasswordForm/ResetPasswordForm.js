import React, { useState } from "react";
import styles from "./ResetPasswordForm.module.scss";
import typography from "../../../../global-styles/global-styles.module.scss";
import TextInput from "../../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  // this state variable holds the user entered "password"
  const [newPassword, setNewPassword] = useState("");
  // this state variable holds the user entered "confirmed password"
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const newPasswordChangeHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  // this function is triggered when the user hits submit after entering new password
  const resetPasswordSubmitHandler = () => {
    navigate("/dashboard");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className={styles.resetPasswordFormContainer}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.form}>
        <h5 className={typography.h5Bold}>Reset Password</h5>
        <TextInput
          type="password"
          label="New Password"
          placeholder="enter your new password"
          onChange={newPasswordChangeHandler}
          value={newPassword}
        />
        <TextInput
          type="password"
          label="Confirm Password"
          placeholder="confirm your password"
          onChange={confirmPasswordChangeHandler}
          value={confirmPassword}
        />
      </div>
      <PrimaryButton onClick={resetPasswordSubmitHandler} type="submit">
        Submit
      </PrimaryButton>
    </form>
  );
}

export default ResetPasswordForm;
