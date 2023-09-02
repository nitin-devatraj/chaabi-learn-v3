import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";
import typography from "../../../global-styles/typography.module.scss";

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
      <div className={`${typography.t3Bold} ${styles.text}`}>{children}</div>
    </button>
  );
}

export default PrimaryButton;
