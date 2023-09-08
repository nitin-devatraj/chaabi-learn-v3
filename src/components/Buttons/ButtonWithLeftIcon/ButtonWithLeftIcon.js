import React from "react";
import styles from "./ButtonWithLeftIcon.module.scss";
import { useSelector } from "react-redux";

function ButtonWithLeftIcon({ onClick, disabled, children }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode
          ? styles.btnWithLeftIconDarkTheme
          : styles.btnWithLeftIconLightTheme
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonWithLeftIcon;
