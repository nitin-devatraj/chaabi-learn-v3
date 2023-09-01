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
  const id = Math.random().toFixed(3);

  return (
    <div className={styles.textInputContainer}>
      <label
        htmlFor={id}
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {label}
      </label>
      <input
        className={isDarkMode ? styles.inputDarkTheme : styles.inputLightTheme}
        type={type}
        id={id}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <p
        className={
          isDarkMode ? styles.helperTextDarkTheme : styles.helperTextLightTheme
        }
        style={{ display: helperTextDisplay }}
      >
        {helperText}
      </p>
    </div>
  );
}

export default TextInput;
