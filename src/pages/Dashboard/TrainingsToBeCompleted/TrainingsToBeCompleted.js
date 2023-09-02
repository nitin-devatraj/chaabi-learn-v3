import React from "react";
import styles from "./TrainingsToBeCompleted.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import typography from "../../../global-styles/typography.module.scss";

function TrainingsToBeCompleted({ dummyTrainings }) {
  return (
    <section className={styles.trainingsToBeCompleted}>
      <span className={typography.t4Lite}>Complete your Trainings</span>
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

export default TrainingsToBeCompleted;
