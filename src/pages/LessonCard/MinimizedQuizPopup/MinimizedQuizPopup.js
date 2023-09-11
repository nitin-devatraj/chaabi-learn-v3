import React from "react";
import styles from "./MinimizedQuizPopup.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";
import { ReactComponent as QuizIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/quiz-lesson.svg";
import { ReactComponent as UpIcon } from "../../../assets/icons/arrow-up.svg";

function MinimizedQuizPopup({ onQuizMaximizise }) {
  return (
    <div
      className={styles.minimizedQuizPopupContainer}
      onClick={onQuizMaximizise}
    >
      <div className={styles.cta}>
        <span>
          <UpIcon />
        </span>
        <p className={typography.t3Med}>Continue Your Quiz</p>
      </div>
      <div className={styles.quizInfo}>
        <QuizIcon />
        <p className={typography.t3Lite}>
          Lesson Name Text Lorem Ipsum Text Extender Lineasfadsfasf
        </p>
      </div>
    </div>
  );
}

export default MinimizedQuizPopup;
