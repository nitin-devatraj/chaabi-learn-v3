import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";
import { ReactComponent as ToggleButtonIcon } from "../../../assets/icons/button-icons/toggle-button-icon.svg";
import { useSelector } from "react-redux";

function ToggleButton({ onClick }) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const toggleBtnHandler = () => {
    setIsToggleActive((prevState) => !prevState);
    onClick();
  };

  const toggleBtnStyles = isDarkMode
    ? styles.toggleBtnDarkTheme
    : styles.toggleBtnLightTheme;

  const toggleActiveStyles = isToggleActive ? styles.toggleBtnActive : null;

  return (
    <div
      className={`${toggleBtnStyles} ${toggleActiveStyles}`}
      onClick={toggleBtnHandler}
    >
      <ToggleButtonIcon className={styles.toggleIcon} />
    </div>
  );
}

export default ToggleButton;
