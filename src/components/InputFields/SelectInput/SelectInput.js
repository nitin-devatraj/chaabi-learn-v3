import React, { useState, useRef } from "react";
import styles from "./SelectInput.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check-icon.svg";
import { useSelector } from "react-redux";

function SelectInput({ options }) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropDownRef = useRef();

  //   useEffect(() => {
  //     const handleOutsideClick = (event) => {
  //       if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
  //         setIsDropDownOpen(false);
  //       }
  //     };

  //     document.addEventListener("mousedown", handleOutsideClick);

  //     return () => {
  //       document.removeEventListener("mousedown", handleOutsideClick);
  //     };
  //   }, []);

  function inputClickHandler() {
    setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  }

  return (
    <div className={styles.selectInputContainer}>
      <div className={styles.inputContainer}>
        <label
          htmlFor="select-input"
          className={
            isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme
          }
        >
          city
        </label>
        <div
          id="select-input"
          className={styles.input}
          onClick={inputClickHandler}
        >
          {selectedOption ?? "select an option"}
          {isDropDownOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </div>
      </div>
      {isDropDownOpen && (
        <div className={styles.dropDownContainer} ref={dropDownRef}>
          {options.map((item) => (
            <div
              className={styles.dropDownItem}
              key={Math.random().toFixed("3")}
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
