import React from "react";
import styles from "./RecommendedTrainings.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import typography from "../../../global-styles/global-styles.module.scss";

function RecommendedTrainings({ dummyTrainings }) {
  return (
    <section className={styles.recommendedTrainingsContainer}>
      <span className={typography.t4Lite}>Recommended Trainings for You</span>
      <div className={styles.trainingsCarousel}>
        {dummyTrainings.map((item) => (
          <CourseCard
            courseTitle={item.title}
            numberOFVideos={item.numberOfVideos}
            numberOFQuizzes={item.numberOfQuizzes}
            totalLessons={item.totalLessons}
            currentLesson={item.currentLesson}
            progress={item.progress}
            key={item.id}
            onClick={item.onClick}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedTrainings;
