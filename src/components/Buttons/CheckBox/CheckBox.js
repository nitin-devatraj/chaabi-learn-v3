import React, { useState } from "react";
import styles from "./CheckBox.module.scss";
import { ReactComponent as CheckBoxIcon } from "../../../assets/component-icons/button-icons/checkbox-icon.svg";
import { useSelector } from "react-redux";

function CheckBox() {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const checkboxHandler = () => {
    setIsCheckboxClicked((prevState) => !prevState);
  };

  const checkBoxStyles = isDarkMode
    ? styles.checkBoxDarkTheme
    : styles.checkBoxLightTheme;

  return (
    <div className={checkBoxStyles} onClick={checkboxHandler}>
      {isCheckboxClicked && <CheckBoxIcon className={styles.checkBoxIcon} />}
    </div>
  );
}

export default CheckBox;
