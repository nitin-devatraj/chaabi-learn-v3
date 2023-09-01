import React, { useState } from "react";
import styles from "./ButtonGroup.module.scss";
import { useSelector } from "react-redux";

function ButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  function buttonClickHandler(event) {
    setSelectedButton(event.target.id);
  }

  return (
    <div
      className={
        isDarkMode ? styles.btnGroupDarkTheme : styles.btnGroupLightTheme
      }
    >
      {buttons.map((item) => (
        <button
          className={`${
            isDarkMode === false
              ? selectedButton === item
                ? styles.selectedBtnLightTheme
                : styles.btnLightTheme
              : isDarkMode === true
              ? selectedButton === item
                ? styles.selectedBtnDarkTheme
                : styles.btnDarkTheme
              : null
          }`}
          key={item}
          id={item}
          onClick={buttonClickHandler}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
