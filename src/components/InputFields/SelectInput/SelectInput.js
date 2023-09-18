import React, { useState, useRef } from "react";
import styles from "./SelectInput.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check-icon.svg";

import { useSelector } from "react-redux";

function SelectInput({ label, showLabel, options, showBorder }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropDownRef = useRef();

  const inputClickHandler = () => {
    setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  const labelStyles = `${styles.labelLightTheme} ${
    isDarkMode && styles.labelDarkTheme
  }`;

  const inputStyles = `${styles.inputLightTheme} ${
    isDarkMode && styles.inputDarkTheme
  } ${showBorder && styles.inputBorder}`;

  const dropDownContainerStyles = `${styles.dropDownContainerLightTheme} ${
    isDarkMode && styles.dropDownContainerDarkTheme
  }`;

  const dropDownItemStyles = `${styles.dropDownItemLightTheme} ${
    isDarkMode && styles.dropDownItemDarkTheme
  }`;

  const randomKey = Math.random().toFixed("3");

  return (
    <div className={styles.selectInputContainer}>
      <div className={styles.inputContainer}>
        {showLabel && (
          <label htmlFor="select-input" className={labelStyles}>
            {label}
          </label>
        )}
        <div
          id="select-input"
          className={inputStyles}
          onClick={inputClickHandler}
        >
          {selectedOption ?? "select an option"}
          {isDropDownOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </div>
      </div>
      {isDropDownOpen && (
        <div className={dropDownContainerStyles} ref={dropDownRef}>
          {options.map((item) => (
            <div
              className={dropDownItemStyles}
              key={randomKey}
              onClick={() => handleOptionClick(item)}
            >
              {item}{" "}
              <span className={styles.hoverSVG}>
                <CheckIcon />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectInput;
