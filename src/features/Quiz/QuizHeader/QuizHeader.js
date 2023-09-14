import React from "react";
import styles from "./QuizHeader.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/features/quiz/quiz-header/arrow-down.svg";
import QuizTimer from "./QuizTimer/QuizTimer";

function QuizHeader({ onQuizMinimize, isQuizComplete, timeLeft }) {
  return (
    <section className={styles.quizHeader}>
      <div className={styles.arrowIconContainer}>
        <span onClick={onQuizMinimize}>
          <ArrowDownIcon />
        </span>
      </div>

      <p className={styles.quizHeaderText}>Take Your Quiz</p>

      {isQuizComplete === false && <QuizTimer timeLeft={timeLeft} />}
    </section>
  );
}

export default QuizHeader;
