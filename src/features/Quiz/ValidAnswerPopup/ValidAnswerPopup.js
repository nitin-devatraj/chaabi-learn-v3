import React from "react";
import styles from "./ValidAnswerPopup.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import { ReactComponent as ValidEmoji } from "../../../assets/quiz-icons/valid-answer-emoji.svg";

function ValidAnswerPopup() {
  return (
    <div className={styles.validAnswerPopup}>
      <ValidEmoji />
      <h6 className={`${typography.h6Bold} ${styles.popupTitle}`}>
        Good Job, You're Right
      </h6>
      <p className={`${typography.t3Reg} ${styles.popupText}`}>
        Right answer explanation text that a client enters at the backend. Right
        answer explanation text that a client enters at the backend. Right
        answer explanation text that
      </p>

      <div className={styles.explanationVideo}></div>

      <button className={`${styles.actionButton} ${typography.t3Bold}`}>
        Next Question
      </button>
    </div>
  );
}

export default ValidAnswerPopup;
