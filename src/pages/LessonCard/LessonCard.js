import React from "react";
import styles from "./LessonCard.module.scss";
import LessonCardHeader from "./LessonCardHeader/LessonCardHeader";
import { useSearchParams } from "react-router-dom";
import LessonTitle from "./LessonTitle/LessonTitle";
import LessonCardNavButtons from "./LessonCardNavButtons/LessonCardNavButtons";
import colorTheme from "../../global-styles/color-theme.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import VideoLesson from "../../features/VideoLesson/VideoLesson";
import QuizLesson from "../../features/QuizLesson/QuizLesson";
import AssessmentLesson from "../../features/AssessmentLesson/AssessmentLesson";
import DocumentLesson from "../../features/DocumentLesson/DocumentLesson";
import AudioLesson from "../../features/AudioLesson/AudioLesson";

function LessonCard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lessonName = searchParams.get("name");
  const lessonType = searchParams.get("type");

  const markCompleteHandler = () => {};

  // const startTrainingBtnHandler = () => {
  //   const firstLessonId = chapterList[0].lessonsList[0].id;
  //   const firstLessonName = chapterList[0].lessonsList[0].name;
  //   const firstLessonType = chapterList[0].lessonsList[0].type;

  //   navigate(
  //     `/lesson/${firstLessonId}?name=${firstLessonName}&type=${firstLessonType}`
  //   );
  // };

  const handlePrevLessonClick = () => {
    console.log("Previous Lesson button clicked");
  };

  const handleNextLessonClick = () => {
    console.log("Next Lesson button clicked");
  };

  return (
    <div className={styles.lessonCardContainer}>
      <LessonCardHeader />
      <div className={`${styles.lessonCard} ${colorTheme.lightThemeRegular}`}>
        <LessonTitle lessonName={lessonName} lessonType={lessonType} />
        <LessonCardNavButtons
          onPrevLessonClick={handlePrevLessonClick}
          onNextLessonClick={handleNextLessonClick}
        />
        {lessonType === "video" && <VideoLesson orientation="portrait" />}
        {lessonType === "assessment" && <AssessmentLesson />}
        {lessonType === "document" && <DocumentLesson />}
        {lessonType === "quiz" && <QuizLesson />}
        {lessonType === "audio" && <AudioLesson />}
        <PrimaryButton
          onClick={markCompleteHandler}
          className={styles.primaryButton}
        >
          Mark as Done
        </PrimaryButton>
      </div>
    </div>
  );
}

export default LessonCard;
