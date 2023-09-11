import React from "react";
import styles from "./Dashboard.module.scss";
import TrainingSummary from "./TrainingSummary/TrainingSummary";
import RecommendedTrainings from "./RecommendedTrainings/RecommendedTrainings";
import TrainingsToBeCompleted from "./TrainingsToBeCompleted/TrainingsToBeCompleted";
import ActiveCourseCard from "./ActiveCourseCard/ActiveCourseCard";
import DashboardHeader from "./DashBoardHeader/DashboardHeader";
import NavBar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const activeCourseDetails = {
    id: 0,
    title: "Zippee Rider Onboarding Training that works amazingly well",
    numberOfVideos: 10,
    numberOfQuizzes: 12,
    totalLessons: 10,
    currentLesson: 3,
    progress: 40,
    onClick: () => {
      navigate(`/training-overview/${0}`);
    },
  };

  const dummyTrainings = [
    {
      id: 1,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 30,
      onClick: () => {
        navigate(`/training-overview/${1}`);
      },
    },
    {
      id: 2,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 20,
      onClick: () => {
        navigate(`/training-overview/${2}`);
      },
    },
    {
      id: 3,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 30,
      onClick: () => {
        navigate(`/training-overview/${3}`);
      },
    },
    {
      id: 4,
      title: "Zippee Rider Onboarding Training that works amazingly well",
      numberOfVideos: 10,
      numberOfQuizzes: 12,
      totalLessons: 10,
      currentLesson: 3,
      progress: 20,
      onClick: () => {
        navigate(`/training-overview/${4}`);
      },
    },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />

      <ActiveCourseCard activeCourseDetails={activeCourseDetails} />

      <TrainingSummary />

      <RecommendedTrainings dummyTrainings={dummyTrainings} />

      <TrainingsToBeCompleted dummyTrainings={dummyTrainings} />

      <NavBar />
    </div>
  );
}

export default Dashboard;
