import React from "react";
import styles from "./NavigationButtonGroup.module.scss";
import { useSelector } from "react-redux";

function NavigationButtonGroup() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const navBtnGroup = isDarkMode
    ? styles.navBtnGroupDarkTheme
    : styles.navBtnGroupLightTheme;

  const btnStyles = isDarkMode ? styles.btnDarkTheme : styles.btnLightTheme;

  return (
    <div className={navBtnGroup}>
      <button className={btnStyles}>&#8592;</button>
      <button className={btnStyles}>&#43;</button>
      <button className={btnStyles}>&#8594;</button>
    </div>
  );
}

export default NavigationButtonGroup;
