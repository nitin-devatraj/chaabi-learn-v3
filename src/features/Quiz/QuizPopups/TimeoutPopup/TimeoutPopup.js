import React from "react";
import styles from "./TimeoutPopup.module.scss";

function TimeoutPopup({
  timeoutTitle,
  timeoutText,
  onGoToResults,
  emoji: Emoji,
}) {
  return (
    <div className={styles.timeoutPopupContainer}>
      <Emoji />
      <h6 className={styles.popupTitle}>{timeoutTitle}</h6>
      <p className={styles.popupText}>{timeoutText}</p>
      <button className={styles.actionButton} onClick={onGoToResults}>
        Go To Results
      </button>
    </div>
  );
}

export default TimeoutPopup;
