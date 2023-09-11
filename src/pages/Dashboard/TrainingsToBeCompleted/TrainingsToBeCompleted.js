import React from "react";
import styles from "./TrainingsToBeCompleted.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import typography from "../../../global-styles/global-styles.module.scss";

function TrainingsToBeCompleted({ dummyTrainings }) {
  return (
    <section className={styles.trainingsToBeCompletedContainer}>
      <span className={typography.t4Lite}>Complete your Trainings</span>
      <div className={styles.trainingsCarousel}>
        {dummyTrainings.map((item) => (
          <CourseCard
            courseTitle={item.title}
            numberOFVideos={item.numberOfVideos}
            numberOFQuizzes={item.numberOfQuizzes}
            totalLessons={item.totalLessons}
            currentLesson={item.currentLesson}
            onClick={item.onClick}
            progress={item.progress}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default TrainingsToBeCompleted;
