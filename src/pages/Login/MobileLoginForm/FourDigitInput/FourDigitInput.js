import React, { useEffect } from "react";
import styles from "./FourDigitInput.module.scss";
import typography from "../../../../global-styles/global-styles.module.scss";

function FourDigitInput({ digits, handleChange, inputRefs, showRequiredText }) {
  useEffect(() => {
    inputRefs[0].current.focus();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.fourDigitInputContainer}>
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

      {showRequiredText === true && (
        <p className={styles.requiredText}>all digits are required</p>
      )}
    </div>
  );
}

export default FourDigitInput;
