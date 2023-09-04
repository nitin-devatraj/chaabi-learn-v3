import React from "react";
import styles from "./QuizResult.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton";

function QuizResult() {
  return (
    <section className={styles.quizResultContainer}>
      <div className={styles.progressIndicatorConainter}>
        <h3 className={`${typography.h3Semi} ${styles.quizResultText}`}>
          You Passed
        </h3>
      </div>

      <section className={styles.quizInfo}>
        <div className={styles.totalQuestions}>
          <span
            className={`${styles.totalQuestionsNumber} ${typography.h6Med}`}
          >
            10
          </span>
          <span className={typography.t3Lite}>Total Questions</span>
        </div>

        <div className={styles.rightAnswers}>
          <span className={`${styles.rightAnswersNumber} ${typography.h6Med}`}>
            10
          </span>
          <span className={typography.t3Lite}>Right Answers</span>
        </div>

        <div className={styles.wrongAnswers}>
          <span className={`${styles.wrongAnswersNumber} ${typography.h6Med}`}>
            10
          </span>
          <span className={typography.t3Lite}>Wrong Answers</span>
        </div>
      </section>

      <PrimaryButton>Next Lesson</PrimaryButton>
    </section>
  );
}

export default QuizResult;
