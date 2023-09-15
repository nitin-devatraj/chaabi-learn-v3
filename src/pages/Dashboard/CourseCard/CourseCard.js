import React from "react";
import styles from "./CourseCard.module.scss";
import courseImg from "../../../assets/images/pages/dashboard/course-card/course-img.jpeg";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function CourseCard({
  courseTitle,
  numberOFVideos,
  numberOFQuizzes,
  totalLessons,
  currentLesson,
  progress,
  onClick,
}) {
  return (
    <div className={styles.courseCardContainer} onClick={onClick}>
      <div className={styles.courseImgContainer}>
        <img src={courseImg} alt="#" className={styles.courseImg} />
      </div>

      <ProgressBar progress={progress} />

      <div className={styles.courseDetails}>
        <p className={styles.courseHeading}>{courseTitle}</p>
        <div className={styles.courseTextInfo}>
          <div>
            <span className={styles.courseText}>{numberOFVideos} Videos</span>
            <span className={styles.courseText}>{numberOFQuizzes} Quizzes</span>
          </div>

          <span className={styles.courseText}>
            Lesson {currentLesson} of {totalLessons}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
