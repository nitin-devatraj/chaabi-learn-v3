import React, { useState, useRef } from "react";
import typography from "../../../global-styles/global-styles.module.scss";
import styles from "./MobileLoginForm.module.scss";
import NumberInput from "../../../components/InputFields/NumberInput/NumberInput";
import FourDigitInput from "./FourDigitInput/FourDigitInput";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

function MobileLoginForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [showHelperText, setShowHelperText] = useState(false);
  const [isGenerateOtpBtnClicked, setIsGenerateOtpBtnClicked] = useState(false);
  const [showRequiredText, setShowRequiredText] = useState(false);

  // this digits array will hold the user input digits
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, event) => {
    setShowRequiredText(false);

    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);

    if (index < inputRefs.length - 1 && event.target.value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  const navigate = useNavigate();

  const mobileNumberChangeHandler = (value) => {
    setShowHelperText(false);
    setIsMobileNumberValid(true);
    setMobileNumber(value);
  };

  const isEnteredMobileNumberValid = (mobileNumber) => {
    return mobileNumber.trim() !== "" && mobileNumber.length >= 10;
  };

  const generateOtpHandler = () => {
    const isMobileNumberValid = isEnteredMobileNumberValid(mobileNumber);
    if (isMobileNumberValid === false) {
      setShowHelperText(!isMobileNumberValid);
      setIsMobileNumberValid(isMobileNumberValid);
    } else {
      setIsGenerateOtpBtnClicked(true);
    }
  };

  const submitOtpHandler = () => {
    const areAnyDigitsOmitted = digits.some((digit) => digit === "");
    if (areAnyDigitsOmitted === true) {
      setShowRequiredText(areAnyDigitsOmitted);
    } else {
      navigate("/dashboard");
    }
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
          <NumberInput
            label="Phone number"
            value={mobileNumber}
            setValue={mobileNumberChangeHandler}
            showHelperText={showHelperText}
            helperText="mobile number is required - min 10 digits"
            isValid={isMobileNumberValid}
          />
        ) : (
          <FourDigitInput
            handleChange={handleChange}
            digits={digits}
            inputRefs={inputRefs}
            showRequiredText={showRequiredText}
          />
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
