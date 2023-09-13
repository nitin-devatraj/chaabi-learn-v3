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
  isValid,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const labelStyles = isDarkMode
    ? styles.labelDarkTheme
    : styles.labelLightTheme;

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

  return (
    <div className={styles.textInputContainer}>
      <label htmlFor={Math.random().toFixed(3)} className={labelStyles}>
        {label}
      </label>
      <input
        className={inputStyles}
        type={type}
        id={Math.random().toFixed(3)}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {showHelperText === true && (
        <p className={helperTextStyles}>{helperText}</p>
      )}
    </div>
  );
}

export default TextInput;
