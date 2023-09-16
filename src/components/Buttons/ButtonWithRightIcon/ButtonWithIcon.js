import React from "react";
import styles from "./ButtonWithIcon.module.scss";
import { useSelector } from "react-redux";

function ButtonWithIcon({ onClick, children, disabled, className, type }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const btnWithIconStyles = `${styles.btnWithIconLightTheme} ${
    isDarkMode && styles.btnWithIconDarkTheme
  } ${className}`;

  return (
    <button
      className={btnWithIconStyles}
      onClick={onClick}
      disabled={disabled}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}

export default ButtonWithIcon;
