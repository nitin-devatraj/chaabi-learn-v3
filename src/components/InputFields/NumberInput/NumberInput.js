import React, { useRef, useEffect } from "react";
import styles from "./NumberInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/components/input-field/number-input/chevron-down.svg";
import { useSelector } from "react-redux";

function NumberInput(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.numberInputContainer}>
      <label
        htmlFor="phone-input"
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}
      </label>

      <div
        className={
          isDarkMode
            ? styles.inputContainerDarkTheme
            : styles.inputContainerLightTheme
        }
      >
        <div
          className={
            isDarkMode ? styles.dropdownDarkTheme : styles.dropdownLightTheme
          }
        >
          IN <DownArrow />
        </div>
        <input
          className={
            isDarkMode ? styles.inputDarkTheme : styles.inputLightTheme
          }
          type="tel"
          ref={inputRef}
          name="phone-input"
          id="phone-input"
          disabled={props.disabled}
          required={props.required}
          placeholder={props.placeholder}
        />
      </div>
      <p
        className={
          isDarkMode ? styles.helperTextDarkTheme : styles.helperTextLightTheme
        }
      >
        {props.helperText}
      </p>
    </div>
  );
}

export default NumberInput;
