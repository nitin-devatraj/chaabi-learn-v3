import React, { useState } from "react";
import styles from "./LessonCard.module.scss";
import LessonCardHeader from "./LessonCardHeader/LessonCardHeader";
import { useNavigate, useParams } from "react-router-dom";
import LessonTitle from "./LessonTitle/LessonTitle";
import LessonCardNavButtons from "./LessonCardNavButtons/LessonCardNavButtons";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import VideoLesson from "../../features/VideoLesson/VideoLesson";
import QuizLesson from "../../features/QuizLesson/QuizLesson";
import AssessmentLesson from "../../features/AssessmentLesson/AssessmentLesson";
import DocumentLesson from "../../features/DocumentLesson/DocumentLesson";
import AudioLesson from "../../features/AudioLesson/AudioLesson";
import Quiz from "../../features/Quiz/Quiz";
import MinimizedQuizPopup from "./MinimizedQuizPopup/MinimizedQuizPopup";

function LessonCard() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizMinimized, setIsQuizMinimized] = useState(false);
  const navigate = useNavigate();
  const { lessonId, lessonName, lessonType, chapterId } = useParams();

  const chapterList = [
    {
      id: 1,
      chapterName: "chapter 1",
      lessonsList: [
        {
          id: 1,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${1}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${1}`
            );
          },
        },
        {
          id: 2,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${2}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${1}`
            );
          },
        },
        {
          id: 3,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${3}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${1}`
            );
          },
        },
      ],
    },
    {
      id: 2,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 4,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${4}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${2}`
            );
          },
        },
        {
          id: 5,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${5}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${2}`
            );
          },
        },
      ],
    },

    {
      id: 3,
      chapterName: "chapter 3",
      lessonsList: [
        {
          id: 6,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${6}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${3}`
            );
          },
        },
        {
          id: 7,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${7}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${3}`
            );
          },
        },
        {
          id: 8,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${8}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${3}`
            );
          },
        },
      ],
    },
    {
      id: 4,
      chapterName: "chapter 4",
      lessonsList: [
        {
          id: 9,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${9}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${4}`
            );
          },
        },
        {
          id: 10,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${10}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${4}`
            );
          },
        },
      ],
    },

    {
      id: 5,
      chapterName: "chapter 5",
      lessonsList: [
        {
          id: 11,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${11}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${5}`
            );
          },
        },
        {
          id: 12,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${12}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${5}`
            );
          },
        },
        {
          id: 13,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${13}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${5}`
            );
          },
        },
      ],
    },
    {
      id: 6,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 14,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${14}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${6}`
            );
          },
        },
        {
          id: 15,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${15}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${6}`
            );
          },
        },
      ],
    },

    {
      id: 7,
      chapterName: "chapter 7",
      lessonsList: [
        {
          id: 16,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${16}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${7}`
            );
          },
        },
        {
          id: 17,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${17}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${7}`
            );
          },
        },
        {
          id: 18,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${18}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${7}`
            );
          },
        },
      ],
    },
    {
      id: 8,
      chapterName: "chapter 8",
      lessonsList: [
        {
          id: 19,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${19}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${8}`
            );
          },
        },
        {
          id: 20,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${20}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${8}`
            );
          },
        },
      ],
    },

    {
      id: 9,
      chapterName: "chapter 9",
      lessonsList: [
        {
          id: 21,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${21}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${9}`
            );
          },
        },
        {
          id: 22,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${22}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${9}`
            );
          },
        },
        {
          id: 23,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${23}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${9}`
            );
          },
        },
      ],
    },
    {
      id: 10,
      chapterName: "chapter 10",
      lessonsList: [
        {
          id: 24,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${24}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${10}`
            );
          },
        },
        {
          id: 25,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${25}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${10}`
            );
          },
        },
      ],
    },
  ];

  const currentLessonId = +lessonId;
  const currentChapterId = +chapterId;

  const currentChapter = chapterList.find((chapter) => {
    return chapter.id === currentChapterId;
  });

  const currentChapterIndex = chapterList.findIndex((chapter) => {
    return chapter.id === currentChapterId;
  });

  const nextChapterIndex = currentChapterIndex + 1;
  const prevChapterIndex = currentChapterIndex - 1;

  const currentLessonIndex = currentChapter.lessonsList.findIndex(
    (lesson) => lesson.id === currentLessonId
  );

  const prevLessonIndex = currentLessonIndex - 1;
  const nextLessonIndex = currentLessonIndex + 1;

  const prevLesson =
    prevLessonIndex >= 0 ? currentChapter.lessonsList[prevLessonIndex] : null;

  const nextLesson =
    nextLessonIndex < currentChapter.lessonsList.length
      ? currentChapter.lessonsList[nextLessonIndex]
      : null;

  const markCompleteHandler = () => {};

  const startQuizHandler = () => {
    setIsQuizStarted(true);
  };

  const quizMinimizeHandler = () => {
    setIsQuizStarted(false);
    setIsQuizMinimized(true);
  };

  const quizMaximizeHandler = () => {
    setIsQuizStarted(true);
    setIsQuizMinimized(false);
  };

  const handlePrevLessonClick = () => {
    if (prevLesson !== null) {
      navigate(
        `/lesson-id/${prevLesson.id}/lesson-name/${prevLesson.name}/lesson-type/${prevLesson.type}/chapter-id/${currentChapterId}`
      );
    } else if (prevChapterIndex >= 0 && prevChapterIndex < chapterList.length) {
      const prevChapter = chapterList[prevChapterIndex];
      const lastLessonOfPrevChapter =
        prevChapter.lessonsList[prevChapter.lessonsList.length - 1];
      navigate(
        `/lesson-id/${lastLessonOfPrevChapter.id}/lesson-name/${lastLessonOfPrevChapter.name}/lesson-type/${lastLessonOfPrevChapter.type}/chapter-id/${prevChapter.id}`
      );
    }
  };

  const handleNextLessonClick = () => {
    if (nextLesson !== null) {
      navigate(
        `/lesson-id/${nextLesson.id}/lesson-name/${nextLesson.name}/lesson-type/${nextLesson.type}/chapter-id/${currentChapterId}`
      );
    } else if (nextChapterIndex >= 0 && nextChapterIndex < chapterList.length) {
      const nextChapter = chapterList[nextChapterIndex];
      const firstLessonOfNextChapter = nextChapter.lessonsList[0];
      navigate(
        `/lesson-id/${firstLessonOfNextChapter.id}/lesson-name/${firstLessonOfNextChapter.name}/lesson-type/${firstLessonOfNextChapter.type}/chapter-id/${nextChapter.id}`
      );
    }
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
          {isQuizStarted === true && (
            <Quiz onQuizMinimize={quizMinimizeHandler} />
          )}
        </div>

        {lessonType === "quiz" ? (
          <PrimaryButton onClick={startQuizHandler}>Start Quiz</PrimaryButton>
        ) : (
          <PrimaryButton onClick={markCompleteHandler}>
            Mark as Done
          </PrimaryButton>
        )}

        {isQuizMinimized === true && (
          <MinimizedQuizPopup onQuizMaximizise={quizMaximizeHandler} />
        )}
      </div>
    </div>
  );
}

export default LessonCard;
