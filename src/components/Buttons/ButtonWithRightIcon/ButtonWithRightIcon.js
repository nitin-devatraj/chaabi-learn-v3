import React from "react";
import styles from "./ButtonWithLeftIcon.module.scss";
import { useSelector } from "react-redux";

function ButtonWithRightIcon(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode
          ? styles.btnWithRightIconDarkTheme
          : styles.btnWithRightIconLightTheme
      }
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonWithRightIcon;
