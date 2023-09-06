import React, { useState, useRef, useEffect } from "react";
import styles from "./FourDigitInput.module.scss";
import typography from "../../../../global-styles/typography.module.scss";

function FourDigitInput() {
  // this digits array will hold the user input digits
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    inputRefs[0].current.focus();
    // eslint-disable-next-line
  }, []);

  const handleChange = (index, event) => {
    const newDigits = [...digits];
    newDigits[index] = event.target.value;
    setDigits(newDigits);

    if (index < inputRefs.length - 1 && event.target.value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className={styles.fourDigitInput}>
      {digits.map((digit, index) => (
        <input
          key={index}
          className={typography.h6Med}
          type="text"
          pattern="\d*"
          inputMode="numeric"
          maxLength="1"
          value={digit}
          onChange={(event) => handleChange(index, event)}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
}

export default FourDigitInput;
