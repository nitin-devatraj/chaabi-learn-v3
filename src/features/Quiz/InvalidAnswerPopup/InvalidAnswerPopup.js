import React from "react";
import styles from "./InvalidAnswerPopup.module.scss";
import { ReactComponent as InvalidEmoji } from "../../../assets/icons/features/quiz/invalid-answer-popup/invalid-answer-emoji.svg";

function InvalidAnswerPopup({ onRetryQuestion }) {
  return (
    <div className={styles.invalidAnswerPopupContainer}>
      <InvalidEmoji />
      <h6 className={styles.popupTitle}>Sorry, Wrong Answer</h6>
      <p className={styles.popupText}>
        Wrong answer explanation text that a client enters at the backend. Wrong
        answer explanation text that a client enters at the backend. Wrong
        answer explanation text that
      </p>
      <div className={styles.explanationVideo}></div>
      <button className={styles.actionButton} onClick={onRetryQuestion}>
        Retry Question
      </button>
    </div>
  );
}

export default InvalidAnswerPopup;
