import React, { useState } from "react";
import typography from "../../../global-styles/typography.module.scss";
import styles from "./MobileLoginForm.module.scss";
import PhoneInput from "../../../components/InputFields/NumberInput/NumberInput";
import FourDigitInput from "../../../components/InputFields/FourDigitInput/FourDigitInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function MobileLoginForm() {
  const [isGenerateOtpBtnClicked, setIsGenerateOtpBtnClicked] = useState(false);
  const navigate = useNavigate();

  const generateOtpHandler = () => {
    setIsGenerateOtpBtnClicked(true);
  };

  const submitOtpHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className={styles.mobileLoginFormContainer}>
      <div className={styles.inputContainer}>
        <h5 className={typography.h5Bold}>
          {isGenerateOtpBtnClicked === false
            ? "Login with Mobile"
            : "Enter the OTP"}
        </h5>
        {isGenerateOtpBtnClicked === false ? (
          <PhoneInput label="Phone number" />
        ) : (
          <FourDigitInput />
        )}
      </div>
      {isGenerateOtpBtnClicked === false ? (
        <PrimaryButton onClick={generateOtpHandler}>Generate OTP</PrimaryButton>
      ) : (
        <PrimaryButton onClick={submitOtpHandler}>Submit</PrimaryButton>
      )}
    </div>
  );
}

export default MobileLoginForm;
