import React from "react";
import styles from "./LessonTitle.module.scss";
import { ReactComponent as VideoIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/video-lesson.svg";
import { ReactComponent as QuizIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/quiz-lesson.svg";
import { ReactComponent as AudioIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/audio-lesson.svg";
import { ReactComponent as AssessmentIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/assessment-lesson.svg";
import { ReactComponent as DocumentIcon } from "../../../assets/icons/pages/lesson-card/lesson-title/document-lesson.svg";

import typography from "../../../global-styles/global-styles.module.scss";

function LessonTitle({ lessonName, lessonType }) {
  return (
    <div className={styles.lessonTitleContainer}>
      <div className={styles.lessonNameContainer}>
        <div>
          {lessonType === "video" && <VideoIcon />}
          {lessonType === "quiz" && <QuizIcon />}
          {lessonType === "audio" && <AudioIcon />}
          {lessonType === "document" && <DocumentIcon />}
          {lessonType === "assessment" && <AssessmentIcon />}
        </div>
        <p className={typography.t3Lite}>{lessonName}</p>
      </div>
    </div>
  );
}

export default LessonTitle;
