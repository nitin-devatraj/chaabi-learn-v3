import React, { useState, useEffect } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

function Quiz({ quizzes, onQuizMinimize, onNextLessonClick }) {
  const [quizIndex, setQuizIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showValidAnswerPopup, setShowValidAnswerPopup] = useState(false);
  const [showInvalidAnswerPopup, setShowInvalidAnswerPopup] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [timeLeft, setTimeLeft] = useState(45);
  const [selectedOption, setSelectedOption] = useState(null);
  const [triedQuestions, setTriedQuestions] = useState(0);
  const [retriedQuestions, setRetriedQuestions] = useState(0);
  const [retriedQuestionIds, setRetriedQuestionIds] = useState([]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const closePopups = () => {
    setShowValidAnswerPopup(false);
    setShowInvalidAnswerPopup(false);
  };

  const answerCheckHandler = () => {
    pauseTimer();
    const correctAnswer = quizzes[quizIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      setShowValidAnswerPopup(true);

      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        setTriedQuestions((prevCount) => prevCount + 1);
      }
    } else {
      setShowInvalidAnswerPopup(true);
      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        setRetriedQuestionIds((prevIds) => [...prevIds, quizzes[quizIndex].id]);
        setRetriedQuestions((prevCount) => prevCount + 1);
      }
    }
  };

  const nextQuestionHandler = () => {
    startTimer();
    closePopups();

    if (quizIndex < quizzes.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const retryQuestionHandler = () => {
    startTimer();
    closePopups();
  };

  const optionClickHandler = (option) => {
    if (isTimerRunning) {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    let timerId;

    if (isTimerRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isTimerRunning, timeLeft]);

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizDetails}>
        <QuizHeader
          onQuizMinimize={onQuizMinimize}
          isQuizComplete={isQuizComplete}
          timeLeft={timeLeft}
          setIsTimerRunning={setIsTimerRunning}
        />

        <QuizProgress
          currentQuestion={quizIndex + 1}
          totalQuestions={quizzes.length}
        />

        <IndividualQuiz
          quizName={quizzes[quizIndex].name}
          quizOptions={quizzes[quizIndex].options}
          optionClickHandler={optionClickHandler}
          selectedOption={selectedOption}
        />

        {isQuizComplete === true && (
          <QuizResult
            totalQuestions={quizzes.length}
            triedQuestions={triedQuestions}
            retriedQuestions={retriedQuestions}
            onNextLessonClick={onNextLessonClick}
          />
        )}
      </div>

      <PrimaryButton onClick={answerCheckHandler}>Check Answer</PrimaryButton>

      {showValidAnswerPopup && (
        <ValidAnswerPopup
          onNextQuestion={nextQuestionHandler}
          explanationTitle={quizzes[quizIndex].correctAnswerTitle}
          explanationText={quizzes[quizIndex].correctAnswerText}
          emoji={quizzes[quizIndex].correctAnswerEmoji}
        />
      )}

      {showInvalidAnswerPopup && (
        <InvalidAnswerPopup
          onRetryQuestion={retryQuestionHandler}
          explanationTitle={quizzes[quizIndex].incorrectAnswerTitle}
          explanationText={quizzes[quizIndex].incorrectAnswerText}
          emoji={quizzes[quizIndex].incorrectAnswerEmoji}
        />
      )}
    </div>
  );
}

export default Quiz;
