import React, { useState } from "react";
import styles from "./RadioButton.module.scss";
import { ReactComponent as RadioButtonIcon } from "../../../assets/icons/button-icons/radio-button-icon.svg";
import { useSelector } from "react-redux";

function RadioButton() {
  const [isRadioBtnClicked, setIsRadioBtnClicked] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  function radioBtnHandler() {
    setIsRadioBtnClicked((prevState) => !prevState);
  }
  return (
    <div
      className={
        isDarkMode ? styles.radioBtnDarkTheme : styles.radioBtnLightTheme
      }
      onClick={radioBtnHandler}
    >
      {isRadioBtnClicked && <RadioButtonIcon className={styles.radioBtnIcon} />}
    </div>
  );
}

export default RadioButton;
