import React, { useState } from "react";
import styles from "./ResetPasswordForm.module.scss";
import typography from "../../../../global-styles/typography.module.scss";
import TextInput from "../../../../components/InputFields/TextInput/TextInput";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const newPasswordChangeHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const resetPasswordSubmitHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.resetPasswordFormContainer}>
      <h5 className={`${typography.h5Bold} ${styles.title}`}>Reset Password</h5>
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
      <PrimaryButton onClick={resetPasswordSubmitHandler}>Submit</PrimaryButton>
    </div>
  );
}

export default ResetPasswordForm;
