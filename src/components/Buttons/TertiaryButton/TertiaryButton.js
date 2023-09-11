import React from "react";
import styles from "./TertiaryButton.module.scss";
import { useSelector } from "react-redux";

function TertiaryButton({ disabled, onClick, children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const tertiaryBtnStyles = isDarkMode
    ? styles.tertiaryBtnDarkTheme
    : styles.tertiaryBtnLightTheme;

  return (
    <button className={tertiaryBtnStyles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default TertiaryButton;
