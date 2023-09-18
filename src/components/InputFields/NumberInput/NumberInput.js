import React from "react";
import styles from "./NumberInput.module.scss";
import { ReactComponent as InvalidIcon } from "../../../assets/icons/invalid-input-icon.svg";
import SelectInput from "../SelectInput/SelectInput";
import { useSelector } from "react-redux";

function NumberInput({
  type,
  label,
  disabled,
  required,
  placeholder,
  value,
  onChange,
  invalid,
  helperText,
  showHelperText,
  inputRef,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const labelStyles = `${styles.labelLightTheme} ${
    isDarkMode && styles.labelDarkTheme
  } ${disabled && styles.disabledLabel}`;

  const inputStyles = `${styles.inputLightTheme} ${
    isDarkMode && styles.inputDarkTheme
  } ${invalid && styles.inputInvalid}`;

  const helperTextStyles = `${styles.helperText} ${
    disabled && styles.disabledHelperText
  } ${invalid && styles.helperTextInvalid}`;

  const inputContainerStyles = `${styles.inputContainerLightTheme} ${
    isDarkMode && styles.inputContainerDarkTheme
  } ${invalid && styles.inputInvalid} ${
    disabled && !isDarkMode && styles.disabledInputContainerLightTheme
  } ${disabled && isDarkMode && styles.disabledInputContainerDarkTheme}
  `;

  // const dropDownStyles = `${styles.dropdownLightTheme} ${
  //   isDarkMode && styles.dropdownDarkTheme
  // }  ${disabled && !isDarkMode && styles.disabledDropdownLightTheme}
  // ${disabled && isDarkMode && styles.disabledDropdownDarkTheme}}`;

  const randomId = Math.random().toFixed(3);

  const countryCodes = [
    "US",
    "CA",
    "UK",
    "FR",
    "DE",
    "AU",
    "JP",
    "IN",
    "BR",
    "CN",
    "RU",
    "ZA",
    "MX",
    "AR",
    "ES",
    "IT",
    "NL",
    "SE",
    "NO",
    "FI",
  ];

  return (
    <div className={styles.numberInputContainer}>
      <label htmlFor={randomId} className={labelStyles}>
        {label}
      </label>
      <div className={inputContainerStyles}>
        <SelectInput options={countryCodes} showBorder={false} />

        <input
          className={inputStyles}
          type={type}
          id={randomId}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          ref={inputRef}
        />
      </div>
      {invalid && <InvalidIcon className={styles.invalidIcon} />}
      {showHelperText && <p className={helperTextStyles}>{helperText}</p>}
    </div>
  );
}

export default NumberInput;
