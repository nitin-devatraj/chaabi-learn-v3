import React from "react";
import styles from "./ValidAnswerPopup.module.scss";

function ValidAnswerPopup({
  explanationTitle,
  explanationText,
  onNextQuestion,
  emoji: Emoji,
}) {
  return (
    <div className={styles.validAnswerPopupContainer}>
      <Emoji />
      <h6 className={styles.popupTitle}>{explanationTitle}</h6>
      <p className={styles.popupText}>{explanationText}</p>
      {/* <div className={styles.explanationVideo}></div> */}
      <button className={styles.actionButton} onClick={onNextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default ValidAnswerPopup;
