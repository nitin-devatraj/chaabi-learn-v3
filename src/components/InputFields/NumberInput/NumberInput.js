import React, { useRef, useEffect } from "react";
import styles from "./NumberInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/components/input-field/number-input/chevron-down.svg";
import { useSelector } from "react-redux";

function NumberInput({
  label,
  disabled,
  required,
  placeholder,
  value,
  setValue,
  isValid,
  helperText,
  showHelperText,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const inputRef = useRef(null);

  const labelStyles = isDarkMode
    ? styles.labelDarkTheme
    : styles.labelLightTheme;

  const inputContainerStyles = isDarkMode
    ? `${styles.inputContainerDarkTheme} ${
        isValid === false && styles.inputContainerInvalid
      }`
    : `${styles.inputContainerLightTheme} ${
        isValid === false && styles.inputContainerInvalid
      }`;

  const dropDownStyles = isDarkMode
    ? styles.dropdownDarkTheme
    : styles.dropdownLightTheme;

  const inputStyles = isDarkMode
    ? styles.inputDarkTheme
    : styles.inputLightTheme;

  const helperTextStyles = isDarkMode
    ? `${styles.helperTextDarkTheme} ${
        isValid === false && styles.helperTextInvalid
      }`
    : `${styles.helperTextLightTheme} ${
        isValid === false && styles.helperTextInvalid
      }`;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.numberInputContainer} tabIndex="0">
      <label htmlFor="phone-input" className={labelStyles}>
        {label}
      </label>

      <div className={inputContainerStyles}>
        <div className={dropDownStyles}>
          IN <DownArrow />
        </div>
        <input
          className={inputStyles}
          type="number"
          ref={inputRef}
          name="phone-input"
          id="phone-input"
          disabled={disabled}
          required={required}
          value={value}
          onChange={inputChangeHandler}
          placeholder={placeholder}
        />
      </div>
      {showHelperText === true && (
        <p className={helperTextStyles}>{helperText}</p>
      )}
    </div>
  );
}

export default NumberInput;
