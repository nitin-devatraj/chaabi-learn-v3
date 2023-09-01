import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";
import typography from "../../../global-styles/typography.module.scss";

function PrimaryButton(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode ? styles.primaryBtnDarkTheme : styles.primaryBtnLightTheme
      }
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className={`${typography.t3Bold} ${styles.text}`}>
        {props.children}
      </div>
    </button>
  );
}

export default PrimaryButton;
