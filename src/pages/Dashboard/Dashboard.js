import React from "react";
import styles from "./Dashboard.module.scss";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import RecommendedTrainings from "./RecommendedTrainings/RecommendedTrainings";
import TrainingsToBeCompleted from "./TrainingsToBeCompleted/TrainingsToBeCompleted";
import ActiveCourseCard from "./ActiveCourseCard/ActiveCourseCard";
import DashboardHeader from "./DashBoardHeader/DashboardHeader";

const dummyTrainings = [
  {
    id: 1,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 30,
  },
  {
    id: 2,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 20,
  },
  {
    id: 3,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 30,
  },
  {
    id: 4,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 20,
  },
];

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />

      <ActiveCourseCard />

      <TrainingSummary />

      <RecommendedTrainings dummyTrainings={dummyTrainings} />

      <TrainingsToBeCompleted dummyTrainings={dummyTrainings} />
    </div>
  );
}

export default Dashboard;
