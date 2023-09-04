import React from "react";
import styles from "./QuizHeader.module.scss";
import { ReactComponent as ArrowDownIcon } from "../../../assets/quiz-icons/arrow-down.svg";
import typography from "../../../global-styles/typography.module.scss";

function QuizHeader() {
  return (
    <section className={styles.quizHeader}>
      <div className={styles.arrowIconContainer}>
        <ArrowDownIcon />
      </div>
      <p className={`${typography.t3Med} ${styles.quizHeaderText}`}>
        Take Your Quiz
      </p>
      <div className={styles.quizTimer}>
        <h6 className={`${typography.h6Med} ${styles.quizTimerText}`}>00:30</h6>
      </div>
    </section>
  );
}

export default QuizHeader;
