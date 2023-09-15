import React from "react";
import styles from "./InvalidAnswerPopup.module.scss";

function InvalidAnswerPopup({
  onRetryQuestion,
  explanationTitle,
  explanationText,
  emoji: Emoji,
}) {
  return (
    <div className={styles.invalidAnswerPopupContainer}>
      <Emoji />
      <h6 className={styles.popupTitle}>{explanationTitle}</h6>
      <p className={styles.popupText}>{explanationText}</p>
      <div className={styles.explanationVideo}></div>
      <button className={styles.actionButton} onClick={onRetryQuestion}>
        Retry Question
      </button>
    </div>
  );
}

export default InvalidAnswerPopup;
