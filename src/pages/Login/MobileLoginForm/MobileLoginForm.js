import React, { useState } from "react";
import typography from "../../../global-styles/typography.module.scss";
import styles from "./MobileLoginForm.module.scss";
import PhoneInput from "../../../components/InputFields/NumberInput/NumberInput";
import FourDigitInput from "./FourDigitInput/FourDigitInput";
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

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className={styles.mobileLoginFormContainer}
      onSubmit={formSubmitHandler}
    >
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
        <PrimaryButton onClick={generateOtpHandler} type="submit">
          Generate OTP
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={submitOtpHandler} type="submit">
          Submit
        </PrimaryButton>
      )}
    </form>
  );
}

export default MobileLoginForm;
