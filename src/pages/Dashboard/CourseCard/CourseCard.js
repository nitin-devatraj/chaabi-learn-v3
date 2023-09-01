import React from "react";
import styles from "./CourseCard.module.scss";
import courseImg from "../../../assets/dashboard-page-icons/course-img.jpeg";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import typography from "../../../global-styles/typography.module.scss";

function CourseCard({
  courseTitle,
  numberOFVideos,
  numberOFQuizzes,
  totalLessons,
  currentLesson,
}) {
  return (
    <div className={styles.courseCard}>
      <img src={courseImg} alt="#" className={styles.courseImg} />
      <ProgressBar progress="30" />
      <div className={styles.courseDetails}>
        <p className={`${styles.courseHeading} ${typography.t4Med}`}>
          {courseTitle}
        </p>
        <div className={styles.courseTextInfo}>
          <div>
            <span className={`${styles.courseText} ${typography.t5Lite}`}>
              {numberOFVideos} Videos
            </span>
            <span className={`${styles.courseText} ${typography.t5Lite}`}>
              {numberOFQuizzes} Quizzes
            </span>
          </div>

          <span className={`${styles.courseText} ${typography.t5Lite}`}>
            Lesson {currentLesson} of {totalLessons}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
