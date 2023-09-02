import React from "react";
import styles from "./LessonTitle.module.scss";
import { ReactComponent as VideoIcon } from "../../../assets/lesson-card-icons/video-lesson.svg";
import { ReactComponent as QuizIcon } from "../../../assets/lesson-card-icons/quiz-lesson.svg";
import typography from "../../../global-styles/typography.module.scss";

function LessonTitle({ lessonName, lessonType }) {
  return (
    <div className={styles.lessonTitleContainer}>
      <div className={styles.lessonNameContainer}>
        <div className={styles.lessonIcon}>
          {lessonType === "video" && <VideoIcon />}
          {lessonType === "quiz" && <QuizIcon />}
        </div>
        <div className={`${styles.lessonName} ${typography.t3Lite}`}>
          {lessonName}
        </div>
      </div>
    </div>
  );
}

export default LessonTitle;
