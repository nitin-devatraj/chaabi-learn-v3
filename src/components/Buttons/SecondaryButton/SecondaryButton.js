import React from "react";
import styles from "./SecondaryButton.module.scss";
import { useSelector } from "react-redux";

function SecondaryButton({ disabled, onClick, children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const secondaryBtnStyles = isDarkMode
    ? styles.secondaryBtnDarkTheme
    : styles.secondaryBtnLightTheme;

  return (
    <button
      className={secondaryBtnStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
