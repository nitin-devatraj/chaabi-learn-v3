import React from "react";
import styles from "./ModalActionButtons.module.scss";
import { useSelector } from "react-redux";

function ModalActionButtons({ secondaryButtonText, primaryButtonText }) {
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
        {secondaryButtonText}
      </button>
      <button
        className={
          isDarkMode ? styles.primaryBtnDarkTheme : styles.primaryBtnLightTheme
        }
      >
        {primaryButtonText}
      </button>
    </div>
  );
}

export default ModalActionButtons;
