import React from "react";
import styles from "./LessonCardNavButtons.module.scss";

function LessonCardNavButtons({ onPrevLessonClick, onNextLessonClick }) {
  return (
    <div className={styles.lessonNavButtonsContainer}>
      <p className={styles.prevLessonBtn} onClick={onPrevLessonClick}>
        &lt; Prev Lesson
      </p>
      <p className={styles.nextLessonBtn} onClick={onNextLessonClick}>
        Next Lesson &gt;
      </p>
    </div>
  );
}

export default LessonCardNavButtons;
