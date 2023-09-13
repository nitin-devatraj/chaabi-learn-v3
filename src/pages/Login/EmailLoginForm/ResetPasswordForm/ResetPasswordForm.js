import React, { useState } from "react";
import styles from "./ResetPasswordForm.module.scss";
import typography from "../../../../global-styles/global-styles.module.scss";
import TextInput from "../../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  // this state variable holds the user entered "password"
  const [newPassword, setNewPassword] = useState("");
  const [showNewPasswordHelperText, setShowNewPasswordHelperText] =
    useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  // this state variable holds the user entered "confirmed password"
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPasswordHelperText, setShowConfirmPasswordHelperText] =
    useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const navigate = useNavigate();

  const newPasswordChangeHandler = (event) => {
    setIsNewPasswordValid(true);
    setShowNewPasswordHelperText(false);
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setIsConfirmPasswordValid(true);
    setShowConfirmPasswordHelperText(false);
    setConfirmPassword(event.target.value);
  };

  const isEnteredPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  const isConfirmedPasswordValid = (password) => {
    return password.trim() !== "" && password.length >= 8;
  };

  // this function is triggered when the user hits submit after entering new password
  const resetPasswordSubmitHandler = () => {
    const enteredPasswordValid = isEnteredPasswordValid(newPassword);
    const confirmedPasswordValid = isConfirmedPasswordValid(confirmPassword);

    setIsNewPasswordValid(enteredPasswordValid);
    setShowNewPasswordHelperText(!enteredPasswordValid);

    setIsConfirmPasswordValid(confirmedPasswordValid);
    setShowConfirmPasswordHelperText(!confirmedPasswordValid);

    if (enteredPasswordValid && confirmedPasswordValid) {
      navigate("/dashboard");
    }
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
          helperText="please enter your new password - min 8 digits"
          showHelperText={showNewPasswordHelperText}
          isValid={isNewPasswordValid}
        />
        <TextInput
          type="password"
          label="Confirm Password"
          placeholder="confirm your password"
          onChange={confirmPasswordChangeHandler}
          value={confirmPassword}
          helperText="please confirm your new password - same as above"
          showHelperText={showConfirmPasswordHelperText}
          isValid={isConfirmPasswordValid}
        />
      </div>
      <PrimaryButton onClick={resetPasswordSubmitHandler} type="submit">
        Submit
      </PrimaryButton>
    </form>
  );
}

export default ResetPasswordForm;
