import React from "react";
import styles from "./ActiveCourseCard.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import activeCourseImg from "../../../assets/dashboard-page-icons/course-img.jpeg";
import colorTheme from "../../../global-styles/color-theme.module.scss";
import typography from "../../../global-styles/typography.module.scss";

function ActiveCourseCard() {
  return (
    <section
      className={`${styles.activeCourseContainer} ${colorTheme.lightThemeLowest}`}
    >
      <p className={`${typography.t4Lite} ${styles.ctaText}`}>
        Continue Your Training
      </p>

      <div
        className={`${styles.activeCourseCard} ${colorTheme.lightThemeRegular}`}
      >
        <img src={activeCourseImg} alt="#" className={styles.activeCourseImg} />
        <ProgressBar progress="30" />
        <div className={styles.activeCourseDetails}>
          <p className={`${typography.t3Med} ${styles.activeCourseHeading}`}>
            Zippee Rider Onboarding Training that works amazingly well
          </p>
          <div className={styles.activeCourseTextInfo}>
            <div>
              <span
                className={`${typography.t5Lite} ${styles.activeCourseText}`}
              >
                10 Videos
              </span>
              <span
                className={`${typography.t5Lite} ${styles.activeCourseText}`}
              >
                10 Quizzes
              </span>
            </div>

            <span className={`${typography.t5Lite} ${styles.activeCourseText}`}>
              Lesson 3 of 10
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveCourseCard;
