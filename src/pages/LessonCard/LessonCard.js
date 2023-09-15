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
import { ReactComponent as ValidEmoji } from "../../assets/icons/features/quiz/valid-answer-popup/valid-answer-emoji.svg";
import { ReactComponent as InvalidEmoji } from "../../assets/icons/features/quiz/invalid-answer-popup/invalid-answer-emoji.svg";

function LessonCard() {
  const [isQuizCardup, setIsQuizCardup] = useState(false);
  const [isMinimizedQuizCardUp, setIsMinimizedQuizCardUp] = useState(false);
  const navigate = useNavigate();
  const { lessonId, lessonName, lessonType, chapterId } = useParams();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

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

  const quizzes = [
    {
      id: 1,
      name: "What is the color of the sky during the day",
      options: ["Blue", "Red", "Green", "Yellow"],
      correctAnswer: "Blue",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "The sky appears blue during the day due to the scattering of sunlight by air molecules.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While the sky is blue during the day, the other options do not represent the typical sky color.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 2,
      name: "How many fingers do most humans have on one hand",
      options: ["Five", "Three", "Ten", "Two"],
      correctAnswer: "Five",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Most humans have five fingers on one hand, including the thumb, index finger, middle finger, ring finger, and pinky finger.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Five.' Most humans have five fingers on one hand.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 3,
      name: "What is the opposite of 'up'",
      options: ["Down", "Left", "Right", "Front"],
      correctAnswer: "Down",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "The opposite of 'up' is 'down,' which refers to the direction toward the ground or lower position.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While the correct answer is 'Down,' the other options do not represent the opposite of 'up.'",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 4,
      name: "Which animal says 'meow'",
      options: ["Cat", "Dog", "Elephant", "Lion"],
      correctAnswer: "Cat",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Cats are known to make a 'meow' sound. It's a common vocalization for them.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Cat,' as they are the animals that typically say 'meow.'",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 5,
      name: "What do you use to write on paper",
      options: ["Pencil", "Spoon", "Shoe", "Phone"],
      correctAnswer: "Pencil",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "A pencil is a writing tool used to create marks on paper. It usually uses graphite as the writing material.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are various tools, 'Pencil' is the common choice for writing on paper.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 6,
      name: "What comes after Monday",
      options: ["Tuesday", "Saturday", "Sunday", "Wednesday"],
      correctAnswer: "Tuesday",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Tuesday follows Monday in the sequence of days of the week.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Tuesday,' as it comes right after 'Monday.'",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 7,
      name: "What is the shape of a soccer ball",
      options: ["Round", "Square", "Triangle", "Oval"],
      correctAnswer: "Round",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "A soccer ball is typically spherical or 'round' in shape.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are various shapes, a 'Round' shape is common for soccer balls.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 8,
      name: "Which season comes after winter",
      options: ["Spring", "Summer", "Fall", "Autumn"],
      correctAnswer: "Spring",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Spring follows the winter season in the seasonal sequence.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Spring,' as it is the season that comes after 'Winter.'",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 9,
      name: "What is the primary color of grass",
      options: ["Green", "Red", "Blue", "Yellow"],
      correctAnswer: "Green",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "Grass is typically 'green' in color, owing to the presence of chlorophyll in its cells.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "The correct answer is 'Green,' as it represents the primary color of grass.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
    {
      id: 10,
      name: "What do you use to protect your head from rain",
      options: ["Umbrella", "Shovel", "Sunglasses", "Hat"],
      correctAnswer: "Umbrella",
      correctAnswerTitle: "Good Job, You're Right",
      correctAnswerText:
        "An 'Umbrella' is used to protect your head from rain by providing a waterproof cover.",
      incorrectAnswerTitle: "Sorry, Wrong Answer",
      incorrectAnswerText:
        "While there are other items, an 'Umbrella' is commonly used for rain protection.",
      correctAnswerEmoji: ValidEmoji,
      incorrectAnswerEmoji: InvalidEmoji,
    },
  ];

  const quizStartingPageData = {
    totalQuestions: 10,
    timeInSec: 45,
    attemptsAllowed: 3,
    passingScore: 40,
  };

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

  const startQuizHandler = () => {
    setIsTimerRunning(true);
    setTimeLeft(45);
    setIsQuizCardup(true);
  };

  const quizMinimizeHandler = () => {
    setIsTimerRunning(false);
    setIsQuizCardup(false);
    setIsMinimizedQuizCardUp(true);
  };

  const quizMaximizeHandler = () => {
    setIsTimerRunning(true);
    setIsQuizCardup(true);
    setIsMinimizedQuizCardUp(false);
  };

  const closeQuizPopups = () => {
    setIsQuizCardup(false);
    setIsMinimizedQuizCardUp(false);
  };

  const handlePrevLessonClick = () => {
    closeQuizPopups();

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
    closeQuizPopups();

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
          {lessonType === "quiz" && (
            <QuizLesson
              totalQuestions={quizStartingPageData.totalQuestions}
              timeInSec={quizStartingPageData.timeInSec}
              attemptsAllowed={quizStartingPageData.attemptsAllowed}
              passingScore={quizStartingPageData.passingScore}
            />
          )}

          {isQuizCardup === true && (
            <Quiz
              quizzes={quizzes}
              onQuizMinimize={quizMinimizeHandler}
              onNextLessonClick={handleNextLessonClick}
              isTimerRunning={isTimerRunning}
              setIsTimerRunning={setIsTimerRunning}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
            />
          )}
        </div>

        {lessonType === "quiz" ? (
          <PrimaryButton onClick={startQuizHandler}>Start Quiz</PrimaryButton>
        ) : (
          <PrimaryButton onClick={handleNextLessonClick}>
            Mark as Done
          </PrimaryButton>
        )}

        {isMinimizedQuizCardUp === true && (
          <MinimizedQuizPopup onQuizMaximizise={quizMaximizeHandler} />
        )}
      </div>
    </div>
  );
}

export default LessonCard;
