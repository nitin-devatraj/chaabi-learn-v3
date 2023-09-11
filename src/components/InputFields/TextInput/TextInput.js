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
  helperTextDisplay,
  onChange,
  value,
}) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const labelStyles = isDarkMode
    ? styles.labelDarkTheme
    : styles.labelLightTheme;

  const inputStyles = isDarkMode
    ? styles.inputDarkTheme
    : styles.inputLightTheme;

  const helperTextStyles = isDarkMode
    ? styles.helperTextDarkTheme
    : styles.helperTextLightTheme;

  const helperTextInactiveStyles = helperTextDisplay
    ? styles.helperTextInactive
    : "";

  return (
    <div className={styles.textInputContainer}>
      <label htmlFor="text-input" className={labelStyles}>
        {label}
      </label>
      <input
        className={inputStyles}
        type={type}
        id="text-input"
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <p className={`${helperTextStyles} ${helperTextInactiveStyles}}`}>
        {helperText}
      </p>
    </div>
  );
}

export default TextInput;
