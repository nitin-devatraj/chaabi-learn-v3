import React from "react";
import styles from "./ButtonWithRightIcon.module.scss";
import { useSelector } from "react-redux";

function ButtonWithRightIcon({ onClick, children, disabled }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const btnWithRightIconStyles = isDarkMode
    ? styles.btnWithRightIconDarkTheme
    : styles.btnWithRightIconLightTheme;

  return (
    <button
      className={btnWithRightIconStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonWithRightIcon;
