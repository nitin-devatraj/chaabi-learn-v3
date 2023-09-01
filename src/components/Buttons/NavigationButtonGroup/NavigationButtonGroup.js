import React from "react";
import styles from "./NavigationButtonGroup.module.scss";
import classes from "../../../global-styles/typography.module.scss";
import { useSelector } from "react-redux";

function NavigationButtonGroup() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={
        isDarkMode ? styles.navBtnGroupDarkTheme : styles.navBtnGroupLightTheme
      }
    >
      <button
        className={`${
          isDarkMode ? styles.btnDarkTheme : styles.btnLightTheme
        } ${classes.t3Med}`}
      >
        &#8592;
      </button>
      <button
        className={`${
          isDarkMode ? styles.btnDarkTheme : styles.btnLightTheme
        } ${classes.t3Med}`}
      >
        &#43;
      </button>
      <button
        className={`${
          isDarkMode ? styles.btnDarkTheme : styles.btnLightTheme
        } ${classes.t3Med}`}
      >
        &#8594;
      </button>
    </div>
  );
}

export default NavigationButtonGroup;
