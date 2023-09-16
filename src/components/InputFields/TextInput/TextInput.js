import React from "react";
import styles from "./TextInput.module.scss";
import { useSelector } from "react-redux";

function TextInput({
  label,
  helperText,
  disabled,
  required,
  type,
  placeholder,
  showHelperText,
  onChange,
  value,
  invalid,
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

  const randomId = Math.random().toFixed(3);

  return (
    <div className={styles.textInputContainer}>
      <label htmlFor={randomId} className={labelStyles}>
        {label}
      </label>
      <input
        className={inputStyles}
        type={type}
        id={randomId}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {invalid && <InvalidIcon className={styles.invalidIcon} />}
      {showHelperText === true && (
        <p className={helperTextStyles}>{helperText}</p>
      )}
    </div>
  );
}

export default TextInput;
