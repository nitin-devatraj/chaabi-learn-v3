import React, { useState } from "react";
import styles from "./LessonCard.module.scss";
import LessonCardHeader from "./LessonCardHeader/LessonCardHeader";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import LessonTitle from "./LessonTitle/LessonTitle";
import LessonCardNavButtons from "./LessonCardNavButtons/LessonCardNavButtons";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import VideoLesson from "../../features/VideoLesson/VideoLesson";
import QuizLesson from "../../features/QuizLesson/QuizLesson";
import AssessmentLesson from "../../features/AssessmentLesson/AssessmentLesson";
import DocumentLesson from "../../features/DocumentLesson/DocumentLesson";
import AudioLesson from "../../features/AudioLesson/AudioLesson";
import Quiz from "../../features/Quiz/Quiz";

// const chapterList = [
//   {
//     id: 1,
//     chapterName: "chapter 1",
//     lessonsList: [
//       { id: 1, name: "Quiz lesson", access: true, type: "quiz" },
//       { id: 2, name: "Assessment lesson", access: false, type: "assessment" },
//       { id: 3, name: "Video lesson", access: true, type: "video" },
//     ],
//   },
//   {
//     id: 2,
//     chapterName: "chapter 2",
//     lessonsList: [
//       { id: 4, name: "Document lesson", access: true, type: "document" },
//       { id: 5, name: "Audio lesson", access: false, type: "audio" },
//     ],
//   },

//   {
//     id: 3,
//     chapterName: "chapter 3",
//     lessonsList: [
//       { id: 6, name: "Quiz lesson", access: true, type: "quiz" },
//       { id: 7, name: "Assessment lesson", access: false, type: "assessment" },
//       { id: 8, name: "Video lesson", access: true, type: "video" },
//     ],
//   },
//   {
//     id: 4,
//     chapterName: "chapter 4",
//     lessonsList: [
//       { id: 9, name: "Document lesson", access: true, type: "document" },
//       { id: 10, name: "Audio lesson", access: false, type: "audio" },
//     ],
//   },

//   {
//     id: 5,
//     chapterName: "chapter 5",
//     lessonsList: [
//       { id: 11, name: "Quiz lesson", access: true, type: "quiz" },
//       {
//         id: 12,
//         name: "Assessment lesson",
//         access: false,
//         type: "assessment",
//       },
//       { id: 13, name: "Video lesson", access: true, type: "video" },
//     ],
//   },
//   {
//     id: 6,
//     chapterName: "chapter 2",
//     lessonsList: [
//       { id: 14, name: "Document lesson", access: true, type: "document" },
//       { id: 15, name: "Audio lesson", access: false, type: "audio" },
//     ],
//   },

//   {
//     id: 7,
//     chapterName: "chapter 7",
//     lessonsList: [
//       { id: 16, name: "Quiz lesson", access: true, type: "quiz" },
//       {
//         id: 17,
//         name: "Assessment lesson",
//         access: false,
//         type: "assessment",
//       },
//       { id: 18, name: "Video lesson", access: true, type: "video" },
//     ],
//   },
//   {
//     id: 8,
//     chapterName: "chapter 8",
//     lessonsList: [
//       { id: 19, name: "Document lesson", access: true, type: "document" },
//       { id: 20, name: "Audio lesson", access: false, type: "audio" },
//     ],
//   },

//   {
//     id: 9,
//     chapterName: "chapter 9",
//     lessonsList: [
//       { id: 21, name: "Quiz lesson", access: true, type: "quiz" },
//       {
//         id: 22,
//         name: "Assessment lesson",
//         access: false,
//         type: "assessment",
//       },
//       { id: 23, name: "Video lesson", access: true, type: "video" },
//     ],
//   },
//   {
//     id: 10,
//     chapterName: "chapter 10",
//     lessonsList: [
//       { id: 24, name: "Document lesson", access: true, type: "document" },
//       { id: 25, name: "Audio lesson", access: false, type: "audio" },
//     ],
//   },
// ];

function LessonCard() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { lessonId } = useParams();
  const lessonName = searchParams.get("name");
  const lessonType = searchParams.get("type");
  const chapterId = searchParams.get("chapterId");

  // const currentLessonId = lessonId;
  // const currentChapterId = chapterId;
  // const currentChapter = chapterList.find((chapter) => {
  //   return chapter.id === +currentChapterId;
  // });

  // const currentLessonIndex = currentChapter.lessonsList.findIndex(
  //   (lesson) => lesson.id === currentLessonId
  // );
  // const prevLessonIndex = currentLessonIndex - 1;
  // const nextLessonIndex = currentLessonIndex + 1;

  // const prevLesson =
  //   prevLessonIndex >= 0 ? currentChapter.lessonsList[prevLessonIndex] : null;
  // const nextLesson =
  //   nextLessonIndex < currentChapter.lessonsList.length
  //     ? currentChapter.lessonsList[nextLessonIndex]
  //     : null;

  const markCompleteHandler = () => {};

  const startQuizHandler = () => {
    setIsQuizStarted(true);
  };

  const handlePrevLessonClick = () => {
    // if (prevLesson === null) {
    //   console.log("you cannot go back anymore");
    //   return;
    // } else {
    //   console.log("prev lesson clicked");
    //   navigate(
    //     `/lesson/${prevLesson.id}?name=${prevLesson.name}&type=${prevLesson.type}&chapterId=${currentChapter.id}`
    //   );
    // }
  };

  const handleNextLessonClick = () => {
    // if (nextLesson === null) {
    //   console.log("you cannot go further anymore");
    //   return;
    // } else {
    //   console.log("next lesson clicked");
    //   console.log(nextLesson.id);
    //   console.log(nextLesson.name);
    //   console.log(nextLesson.type);
    //   console.log(currentChapter.id);
    //   navigate(
    //     `/lesson/${nextLesson.id}?name=${nextLesson.name}&type=${nextLesson.type}&chapterId=${currentChapter.id}`
    //   );
    // }
  };

  return (
    <div className={styles.lessonCardContainer}>
      <LessonCardHeader />
      <div className={styles.lessonCard}>
        <div className={styles.lesson}>
          <LessonTitle lessonName={lessonName} lessonType={lessonType} />
          <LessonCardNavButtons
            onPrevLessonClick={handlePrevLessonClick}
            onNextLessonClick={handleNextLessonClick}
          />
          {lessonType === "video" && <VideoLesson orientation="portrait" />}
          {lessonType === "assessment" && <AssessmentLesson />}
          {lessonType === "document" && <DocumentLesson />}
          {lessonType === "audio" && <AudioLesson />}
          {lessonType === "quiz" && <QuizLesson />}
          {isQuizStarted === true && <Quiz />}
        </div>

        {lessonType === "quiz" ? (
          <PrimaryButton onClick={startQuizHandler}>Start Quiz</PrimaryButton>
        ) : (
          <PrimaryButton onClick={markCompleteHandler}>
            Mark as Done
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}

export default LessonCard;
