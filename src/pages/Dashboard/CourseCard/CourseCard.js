import React from "react";
import styles from "./CourseCard.module.scss";
import courseImg from "../../../assets/images/pages/dashboard/course-card/course-img.jpeg";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

function CourseCard({
  courseTitle,
  numberOFVideos,
  numberOFQuizzes,
  totalLessons,
  currentLesson,
  progress,
  trainingId,
}) {
  const navigate = useNavigate();

  const courseCardClickHandler = () => {
    navigate(`/training-overview/${trainingId}`);
  };

  return (
    <div
      className={styles.courseCardContainer}
      onClick={courseCardClickHandler}
    >
      <img src={courseImg} alt="#" className={styles.courseImg} />

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
