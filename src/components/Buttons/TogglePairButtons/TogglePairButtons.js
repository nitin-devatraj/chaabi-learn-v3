import React, { useState } from "react";
import styles from "./TogglePairButtons.module.scss";
import { useSelector } from "react-redux";

function TogglePairButtons(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [selectedBtn, setSelectedBtn] = useState("first-button");

  function buttonClickHandler(event) {
    setSelectedBtn(event.target.id);
  }

  return (
    <div className={styles.togglePairButtonsContainer}>
      <label
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}
      </label>
      <div className={styles.buttonGroup}>
        <button
          className={
            selectedBtn === "first-button" ? styles.selectedBtn : styles.btn
          }
          id="first-button"
          onClick={buttonClickHandler}
        >
          {props.firstButton}
        </button>
        <button
          className={
            selectedBtn === "second-button" ? styles.selectedBtn : styles.btn
          }
          id="second-button"
          onClick={buttonClickHandler}
        >
          {props.secondButton}
        </button>
      </div>
    </div>
  );
}

export default TogglePairButtons;
