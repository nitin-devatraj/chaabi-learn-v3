import React from "react";
import styles from "./LessonCardNavButtons.module.scss";
import typography from "../../../global-styles/typography.module.scss";

function LessonCardNavButtons({ onPrevLessonClick, onNextLessonClick }) {
  return (
    <div className={styles.lessonNavButtons}>
      <span
        className={`${styles.prevLessonBtn} ${typography.t4Reg}`}
        onClick={() => onPrevLessonClick()}
      >
        &lt; Prev Lesson
      </span>
      <span
        className={`${styles.nextLessonBtn} ${typography.t4Reg}`}
        onClick={() => onNextLessonClick()}
      >
        Next Lesson &gt;
      </span>
    </div>
  );
}

export default LessonCardNavButtons;
