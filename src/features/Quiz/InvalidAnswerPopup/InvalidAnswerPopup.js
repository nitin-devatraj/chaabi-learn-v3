import React from "react";
import styles from "./InvalidAnswerPopup.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import { ReactComponent as InvalidEmoji } from "../../../assets/quiz-icons/invalid-answer-emoji.svg";

function InvalidAnswerPopup() {
  return (
    <div className={styles.invalidAnswerPopup}>
      <InvalidEmoji />
      <h6 className={`${typography.h6Bold} ${styles.popupTitle}`}>
        Sorry, Wrong Answer
      </h6>
      <p className={`${typography.t3Reg} ${styles.popupText}`}>
        Wrong answer explanation text that a client enters at the backend. Wrong
        answer explanation text that a client enters at the backend. Wrong
        answer explanation text that
      </p>

      <div className={styles.explanationVideo}></div>

      <button className={`${styles.actionButton} ${typography.t3Bold}`}>
        Retry Question
      </button>
    </div>
  );
}

export default InvalidAnswerPopup;
