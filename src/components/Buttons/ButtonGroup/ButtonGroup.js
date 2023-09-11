import React, { useState } from "react";
import styles from "./ButtonGroup.module.scss";
import { useSelector } from "react-redux";

function ButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  function buttonClickHandler(event) {
    setSelectedButton(event.target.id);
  }

  const btnGroupStyles = isDarkMode
    ? styles.btnGroupDarkTheme
    : styles.btnGroupLightTheme;

  const btnStyles =
    isDarkMode === false
      ? selectedButton === item
        ? styles.selectedBtnLightTheme
        : styles.btnLightTheme
      : isDarkMode === true
      ? selectedButton === item
        ? styles.selectedBtnDarkTheme
        : styles.btnDarkTheme
      : null;

  return (
    <div className={btnGroupStyles}>
      {buttons.map((item) => (
        <button
          className={btnStyles}
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
