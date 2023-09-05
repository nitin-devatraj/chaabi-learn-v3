import React from "react";
import styles from "./QuizLession.module.scss";
import typography from "../../global-styles/typography.module.scss";

function QuizLesson() {
  return (
    <div className={styles.quizLessonContainer}>
      <p className={typography.t4Med}>Quiz Details</p>
      <div className={styles.quizDetails}>
        <div className={styles.totalQuestions}>
          <span className={styles.totalQuestionsNumber}>10</span>
          <span className={typography.t3Lite}>Total Questions</span>
        </div>

        <div className={styles.timePerQuestion}>
          <span className={styles.timePerQuestionNumber}>30 second</span>
          <span className={typography.t3Lite}>Time per question</span>
        </div>

        <div className={styles.attemptsAllowed}>
          <span className={styles.attemptsAllowedNumber}>03</span>
          <span className={typography.t3Lite}>Attempts Allowed</span>
        </div>

        <div className={styles.passingScore}>
          <span className={styles.passingScoreNumber}>50%</span>
          <span className={typography.t3Lite}>Passing Score</span>
        </div>
      </div>
    </div>
  );
}

export default QuizLesson;
