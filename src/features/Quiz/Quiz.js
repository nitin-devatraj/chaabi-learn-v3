import React, { useState } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

function Quiz({ onQuizMinimize }) {
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const quizCompleteHandler = () => {
    setIsQuizComplete((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.quizContainer}>
        <div className={styles.quizDetails}>
          <QuizHeader
            onQuizMinimize={onQuizMinimize}
            isQuizComplete={isQuizComplete}
          />

          <QuizProgress />

          <IndividualQuiz />

          {isQuizComplete === true && (
            <QuizResult onNextLesson={quizCompleteHandler} />
          )}
        </div>

        <PrimaryButton onClick={quizCompleteHandler}>
          Check Answer
        </PrimaryButton>

        {/* <ValidAnswerPopup /> */}

        {/* <InvalidAnswerPopup /> */}
      </div>
    </>
  );
}

export default Quiz;
