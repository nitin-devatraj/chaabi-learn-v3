import React from "react";
import styles from "./TextButton.module.scss";
import { useSelector } from "react-redux";

function TextButton({ disabled, onClick, className, children, type }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const textBtnStyles = `${styles.textBtnLightTheme} ${
    isDarkMode && styles.textBtnDarkTheme
  } ${className}`;

  return (
    <button
      className={textBtnStyles}
      disabled={disabled}
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default TextButton;
