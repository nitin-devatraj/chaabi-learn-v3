import React, { useState, useEffect } from "react";
import styles from "./QuizTimer.module.scss";

function QuizTimer() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft >= 1) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft]);

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
