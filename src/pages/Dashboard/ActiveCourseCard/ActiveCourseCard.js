import React from "react";
import styles from "./ActiveCourseCard.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import activeCourseImg from "../../../assets/images/pages/dashboard/course-img.jpeg";
import typography from "../../../global-styles/typography.module.scss";
import { useNavigate } from "react-router-dom";

const courseDetails = {
  id: 4,
  title: "Zippee Rider Onboarding Training that works amazingly well",
  numberOfVideos: 10,
  numberOfQuizzes: 12,
  totalLessons: 10,
  currentLesson: 3,
  progress: 40,
};

function ActiveCourseCard() {
  const navigate = useNavigate();

  const courseCardClickHandler = () => {
    navigate(`/training-overview/${courseDetails.id}`);
  };

  return (
    <section className={styles.activeCourseContainer}>
      <p className={typography.t4Lite}>Continue Your Training</p>

      <div className={styles.activeCourseCard} onClick={courseCardClickHandler}>
        <img src={activeCourseImg} alt="#" className={styles.activeCourseImg} />
        <ProgressBar progress={courseDetails.progress} />

        <div className={styles.activeCourseDetails}>
          <p className={typography.t3Med}>{courseDetails.title}</p>

          <div className={styles.activeCourseTextInfo}>
            <div>
              <span className={styles.activeCourseText}>
                {courseDetails.numberOfVideos} Videos
              </span>

              <span className={styles.activeCourseText}>
                {courseDetails.numberOfQuizzes} Quizzes
              </span>
            </div>

            <span className={styles.activeCourseText}>
              Lesson {courseDetails.currentLesson} of{" "}
              {courseDetails.totalLessons}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveCourseCard;
