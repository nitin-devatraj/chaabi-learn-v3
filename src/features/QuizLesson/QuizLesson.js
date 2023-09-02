import React from "react";
import styles from "./QuizLession.module.scss";
import colorTheme from "../../global-styles/color-theme.module.scss";
import typography from "../../global-styles/typography.module.scss";

function QuizLesson() {
  return (
    <div
      className={`${styles.quizLessonContainer} ${colorTheme.lightThemeHighest}`}
    >
      <p className={`${styles.quizDetailsText} ${typography.t4Med}`}>
        Quiz Details
      </p>
      <div className={styles.quizDetails}>
        <div className={styles.totalQuestions}>
          <span
            className={`${styles.totalQuestionsNumber} ${typography.h6Med}`}
          >
            10
          </span>
          <span className={typography.t3Lite}>Total Questions</span>
        </div>

        <div className={styles.timePerQuestion}>
          <span
            className={`${styles.timePerQuestionNumber} ${typography.h6Med}`}
          >
            30 second
          </span>
          <span className={typography.t3Lite}>Time per question</span>
        </div>

        <div className={styles.attemptsAllowed}>
          <span
            className={`${styles.attemptsAllowedNumber} ${typography.h6Med}`}
          >
            03
          </span>
          <span className={typography.t3Lite}>Attempts Allowed</span>
        </div>

        <div className={styles.passingScore}>
          <span className={`${styles.passingScoreNumber} ${typography.h6Med}`}>
            50%
          </span>
          <span className={typography.t3Lite}>Passing Score</span>
        </div>
      </div>
    </div>
  );
}

export default QuizLesson;
