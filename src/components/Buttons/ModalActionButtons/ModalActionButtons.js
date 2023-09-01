import React from "react";
import styles from "./ModalActionButtons.module.scss";
import { useSelector } from "react-redux";

function ModalActionButtons(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={
        isDarkMode
          ? styles.modalActionBtnsDarkTheme
          : styles.modalActionBtnsLightTheme
      }
    >
      <button
        className={
          isDarkMode
            ? styles.secondaryBtnDarkTheme
            : styles.secondaryBtnLightTheme
        }
      >
        {props.secondaryButtonText}
      </button>
      <button
        className={
          isDarkMode ? styles.primaryBtnDarkTheme : styles.primaryBtnLightTheme
        }
      >
        {props.primaryButtonText}
      </button>
    </div>
  );
}

export default ModalActionButtons;
