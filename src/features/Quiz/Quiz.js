import React from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

function Quiz() {
  return (
    <>
      <div className={styles.quizContainer}>
        <QuizHeader />

        <QuizProgress />

        <IndividualQuiz />

        <PrimaryButton>Check Answer</PrimaryButton>

        {/* <ValidAnswerPopup /> */}

        {/* <InvalidAnswerPopup /> */}
        {/* <QuizResult /> */}
      </div>
    </>
  );
}

export default Quiz;
