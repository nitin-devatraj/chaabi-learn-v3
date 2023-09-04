import React from "react";
import styles from "./QuizProgress.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function QuizProgress() {
  return (
    <section className={styles.quizProgressContainer}>
      <p className={`${typography.t5Reg} ${styles.quizProgressText}`}>
        Question 1 of 10
      </p>
      <ProgressBar progress="10" />
    </section>
  );
}

export default QuizProgress;
