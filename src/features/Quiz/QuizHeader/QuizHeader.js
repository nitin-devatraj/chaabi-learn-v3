import React from "react";
import styles from "./QuizHeader.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/features/quiz/quiz-header/arrow-down.svg";

function QuizHeader({ onQuizMinimize, isQuizComplete }) {
  return (
    <section className={styles.quizHeader}>
      <div className={styles.arrowIconContainer}>
        <span onClick={onQuizMinimize}>
          <ArrowDownIcon />
        </span>
      </div>

      <p className={styles.quizHeaderText}>Take Your Quiz</p>

      {isQuizComplete === false && (
        <div className={styles.quizTimer}>
          <h6 className={styles.quizTimerText}>00:30</h6>
        </div>
      )}
    </section>
  );
}

export default QuizHeader;
