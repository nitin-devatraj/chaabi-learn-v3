import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";

function PrimaryButton({ disabled, onClick, className, children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const primaryBtnColorTheme = isDarkMode
    ? styles.primaryBtnDarkTheme
    : styles.primaryBtnLightTheme;

  return (
    <button
      className={`${primaryBtnColorTheme} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <p className={styles.text}>{children}</p>
    </button>
  );
}

export default PrimaryButton;
