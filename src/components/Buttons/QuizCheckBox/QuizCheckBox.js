import React, { useState } from "react";
import styles from "./QuizCheckBox.module.scss";
import { ReactComponent as CheckIcon } from "../../../assets/component-icons/button-icons/checkbox-icon.svg";

function QuizCheckBox({ valid, invalid }) {
  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState(false);

  const checkBoxClickHandler = () => {
    setIsCheckBoxClicked((prevState) => !prevState);
  };
  return (
    <div
      className={`${styles.quizCheckBox} ${valid === true && styles.valid}
      ${invalid === true && styles.invalid}
      `}
      onClick={checkBoxClickHandler}
    >
      {isCheckBoxClicked === true && <CheckIcon />}
    </div>
  );
}

export default QuizCheckBox;
