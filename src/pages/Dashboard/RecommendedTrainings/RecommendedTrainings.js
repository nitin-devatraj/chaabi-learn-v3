import React from "react";
import styles from "./RecommendedTrainings.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import typography from "../../../global-styles/typography.module.scss";

function RecommendedTrainings({ dummyTrainings }) {
  return (
    <section className={styles.recommendedTrainings}>
      <span className={typography.t4Lite}>Recommended Trainings for You</span>
      <div className={styles.trainingsCarousel}>
        {dummyTrainings.map((item) => (
          <CourseCard
            courseTitle={item.title}
            numberOFVideos={item.numberOfVideos}
            numberOFQuizzes={item.numberOfQuizzes}
            totalLessons={item.totalLessons}
            currentLesson={item.currentLesson}
            trainingId={item.id}
            progress={item.progress}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedTrainings;
