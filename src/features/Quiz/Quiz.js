import React, { useState } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

const quizzes = [
  {
    id: 1,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 2,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 3,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 4,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 5,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 6,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 7,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 8,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 9,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
  {
    id: 10,
    name: "what is the capital of india",
    options: ["delhi", "bombay", "calcutta", "hyd"],
  },
];

function Quiz({ onQuizMinimize }) {
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const quizCompleteHandler = () => {
    setIsQuizComplete((prevState) => !prevState);
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizDetails}>
        <QuizHeader
          onQuizMinimize={onQuizMinimize}
          isQuizComplete={isQuizComplete}
        />

        <QuizProgress />

        <IndividualQuiz
          quizName={quizzes[0].name}
          quizOptions={quizzes[0].options}
        />

        {isQuizComplete === true && (
          <QuizResult onNextLesson={quizCompleteHandler} />
        )}
      </div>

      <PrimaryButton onClick={quizCompleteHandler}>Check Answer</PrimaryButton>

      {/* <ValidAnswerPopup /> */}

      {/* <InvalidAnswerPopup /> */}
    </div>
  );
}

export default Quiz;
