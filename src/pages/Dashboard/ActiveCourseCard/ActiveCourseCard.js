import React from "react";
import styles from "./ActiveCourseCard.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import activeCourseImg from "../../../assets/images/pages/dashboard/active-course-card/course-img.jpeg";
import typography from "../../../global-styles/global-styles.module.scss";

function ActiveCourseCard({ activeCourseDetails }) {
  return (
    <section className={styles.activeCourseContainer}>
      <p className={typography.t4Lite}>Continue Your Training</p>

      <div
        className={styles.activeCourseCard}
        onClick={activeCourseDetails.onClick}
      >
        <div className={styles.activeCourseImgContainer}>
          <img
            src={activeCourseImg}
            alt="#"
            className={styles.activeCourseImg}
          />
        </div>
        <ProgressBar progress={activeCourseDetails.progress} />

        <div className={styles.activeCourseDetails}>
          <p className={typography.t3Med}>{activeCourseDetails.title}</p>

          <div className={styles.activeCourseTextInfo}>
            <div>
              <span className={styles.activeCourseText}>
                {activeCourseDetails.numberOfVideos} Videos
              </span>

              <span className={styles.activeCourseText}>
                {activeCourseDetails.numberOfQuizzes} Quizzes
              </span>
            </div>

            <span className={styles.activeCourseText}>
              Lesson {activeCourseDetails.currentLesson} of{" "}
              {activeCourseDetails.totalLessons}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveCourseCard;
