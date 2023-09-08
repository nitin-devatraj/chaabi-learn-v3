import React from "react";
import styles from "./ButtonWithRightIcon.module.scss";
import { useSelector } from "react-redux";

function ButtonWithRightIcon({ onClick, children, disabled }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode
          ? styles.btnWithRightIconDarkTheme
          : styles.btnWithRightIconLightTheme
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonWithRightIcon;
