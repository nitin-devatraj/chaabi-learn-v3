import React from "react";
import styles from "./ValidAnswerPopup.module.scss";
import { ReactComponent as ValidEmoji } from "../../../assets/icons/features/quiz/valid-answer-popup/valid-answer-emoji.svg";

function ValidAnswerPopup() {
  return (
    <div className={styles.validAnswerPopupContainer}>
      <ValidEmoji />
      <h6 className={styles.popupTitle}>Good Job, You're Right</h6>
      <p className={styles.popupText}>
        Right answer explanation text that a client enters at the backend. Right
        answer explanation text that a client enters at the backend. Right
        answer explanation text that
      </p>
      {/* <div className={styles.explanationVideo}></div> */}
      <button className={styles.actionButton}>Next Question</button>
    </div>
  );
}

export default ValidAnswerPopup;
