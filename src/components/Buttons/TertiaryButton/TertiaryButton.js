import React from "react";
import styles from "./TertiaryButton.module.scss";
import { useSelector } from "react-redux";

function TertiaryButton({ disabled, onClick, children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode ? styles.tertiaryBtnDarkTheme : styles.tertiaryBtnLightTheme
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TertiaryButton;
