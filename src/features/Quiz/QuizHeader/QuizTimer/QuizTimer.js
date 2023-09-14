import React from "react";
import styles from "./QuizTimer.module.scss";

function QuizTimer({ timeLeft }) {
  const formatTime = (seconds) => {
    // const remainingSeconds = seconds % 60;
    const remainingSeconds = seconds;
    return `00:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className={styles.quizTimer}>
      <h6 className={styles.quizTimerText}>{formatTime(timeLeft)}</h6>
    </div>
  );
}

export default QuizTimer;
