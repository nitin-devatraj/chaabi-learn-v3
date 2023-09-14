import React from "react";
import styles from "./QuizProgress.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function QuizProgress({ currentQuestion, totalQuestions }) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <section className={styles.quizProgressContainer}>
      <p className={typography.t5Reg}>
        Question {currentQuestion} of {totalQuestions}
      </p>
      <ProgressBar progress={progressPercentage} />
    </section>
  );
}

export default QuizProgress;
