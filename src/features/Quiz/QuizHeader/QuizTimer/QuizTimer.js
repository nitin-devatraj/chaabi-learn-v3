import React from "react";
import styles from "./QuizTimer.module.scss";

function QuizTimer({ timeLeft }) {
  const quizTimerStyles =
    timeLeft > 0 ? styles.quizTimerActive : styles.quizTimerExpired;

  const quizTimerTextStyles =
    timeLeft > 0 ? styles.quizTimerTextActive : styles.quizTimerTextExpired;

  return (
    <div className={quizTimerStyles}>
      <h6 className={quizTimerTextStyles}>
        {timeLeft < 10 ? ` 00:0${timeLeft}` : `00: ${timeLeft}`}
      </h6>
    </div>
  );
}

export default QuizTimer;
