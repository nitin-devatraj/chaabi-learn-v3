import React, { useState } from "react";
import styles from "./CheckBox.module.scss";
import { ReactComponent as CheckBoxIcon } from "../../../assets/icons/button-icons/checkbox-icon.svg";
import { useSelector } from "react-redux";

function CheckBox() {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  function checkboxHandler() {
    setIsCheckboxClicked((prevState) => !prevState);
  }

  return (
    <div
      className={
        isDarkMode ? styles.checkBoxDarkTheme : styles.checkBoxLightTheme
      }
      onClick={checkboxHandler}
    >
      {isCheckboxClicked && <CheckBoxIcon className={styles.checkBoxIcon} />}
    </div>
  );
}

export default CheckBox;
