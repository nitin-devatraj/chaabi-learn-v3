import React from "react";
import styles from "./QuizResult.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";
import SemiCircleGauge from "./SemiCircleGauge/SemiCircleGauge";

function QuizResult({
  totalQuestions,
  triedQuestions,
  retriedQuestions,
  onNextLessonClick,
}) {
  return (
    <section className={styles.quizResultContainer}>
      <div className={styles.progressIndicatorContainer}>
        <div className={styles.progressChartContainer}>
          <SemiCircleGauge triedQuestions={triedQuestions} />
        </div>
        <h3 className={typography.h3Semi}>You Passed</h3>
      </div>

      <section className={styles.quizInfo}>
        <div className={styles.totalQuestions}>
          <span className={styles.totalQuestionsNumber}>{totalQuestions}</span>
          <span className={typography.t3Lite}>Total Questions</span>
        </div>

        <div className={styles.rightAnswers}>
          <span className={styles.rightAnswersNumber}>{triedQuestions}</span>
          <span className={typography.t3Lite}>First Attempt Questions</span>
        </div>

        <div className={styles.wrongAnswers}>
          <span className={styles.wrongAnswersNumber}>{retriedQuestions}</span>
          <span className={typography.t3Lite}>Retried Questions</span>
        </div>
      </section>

      <PrimaryButton onClick={onNextLessonClick}>Next Lesson</PrimaryButton>
    </section>
  );
}

export default QuizResult;
