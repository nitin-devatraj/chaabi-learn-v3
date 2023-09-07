import React from "react";
import styles from "./IndividualQuiz.module.scss";
import QuizCheckBox from "../../../components/Buttons/QuizCheckBox/QuizCheckBox";
import typography from "../../../global-styles/typography.module.scss";

function IndividualQuiz() {
  return (
    <div className={styles.individualQuizContainer}>
      <p className={typography.t2Semi}>
        Q. Text of the question that can run into two lines and can be added in
        two lines only
      </p>
      <div className={styles.quizOption}>
        <QuizCheckBox />
        <span className={styles.quizOptionText}>Option 1 text message</span>
      </div>
      <div className={styles.quizOption}>
        <QuizCheckBox />
        <span className={styles.quizOptionText}>Option 2 text message</span>
      </div>
      <div className={styles.quizOption}>
        <QuizCheckBox />
        <span className={styles.quizOptionText}>Option 3 text message</span>
      </div>
      <div className={styles.quizOption}>
        <QuizCheckBox />
        <span className={styles.quizOptionText}>Option 4 text message</span>
      </div>
    </div>
  );
}

export default IndividualQuiz;
