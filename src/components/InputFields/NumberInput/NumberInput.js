import React, { useRef, useEffect } from "react";
import styles from "./NumberInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/components/input-field/number-input/chevron-down.svg";
import { useSelector } from "react-redux";

function NumberInput({ label, disabled, required, placeholder, helperText }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const inputRef = useRef(null);

  const labelStyles = isDarkMode
    ? styles.labelDarkTheme
    : styles.labelLightTheme;

  const inputContainerStyles = isDarkMode
    ? styles.inputContainerDarkTheme
    : styles.inputContainerLightTheme;

  const dropDownStyles = isDarkMode
    ? styles.dropdownDarkTheme
    : styles.dropdownLightTheme;

  const inputStyles = isDarkMode
    ? styles.inputDarkTheme
    : styles.inputLightTheme;

  const helperTextStyles = isDarkMode
    ? styles.helperTextDarkTheme
    : styles.helperTextLightTheme;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.numberInputContainer}>
      <label htmlFor="phone-input" className={labelStyles}>
        {label}
      </label>

      <div className={inputContainerStyles}>
        <div className={dropDownStyles}>
          IN <DownArrow />
        </div>
        <input
          className={inputStyles}
          type="tel"
          ref={inputRef}
          name="phone-input"
          id="phone-input"
          disabled={disabled}
          required={required}
          placeholder={placeholder}
        />
      </div>
      <p className={helperTextStyles}>{helperText}</p>
    </div>
  );
}

export default NumberInput;
