import React, { useReducer, useEffect } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

const quizActionTypes = {
  quizIndex: "quizIndex",
  isQuizComplete: "isQuizComplete",
  validAnswerPopup: "validAnswerPopup",
  inValidAnswerPopup: "inValidAnswerPopup",
  isTimerRunning: "isTimerRunning",
  timeLeft: "timeLeft",
  selectedOption: "selectedOption",
  incrementTriedQuestions: "incrementTriedQuestions",
  incrementRetriedQuestions: "incrementRetriedQuestions",
  addRetriedQuestionsIds: "addRetriedQuestionsIds",
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case quizActionTypes.quizIndex:
      return { ...state, quizIndex: action.payload };
    case quizActionTypes.isQuizComplete:
      return { ...state, isQuizComplete: action.payload };
    case quizActionTypes.validAnswerPopup:
      return { ...state, showValidAnswerPopup: action.payload };
    case quizActionTypes.inValidAnswerPopup:
      return { ...state, showInvalidAnswerPopup: action.payload };
    case quizActionTypes.isTimerRunning:
      return { ...state, isTimerRunning: action.payload };
    case quizActionTypes.timeLeft:
      return { ...state, timeLeft: action.payload };
    case quizActionTypes.selectedOption:
      return { ...state, selectedOption: action.payload };
    case quizActionTypes.incrementTriedQuestions:
      return { ...state, triedQuestions: state.triedQuestions + 1 };
    case quizActionTypes.incrementRetriedQuestions:
      return { ...state, retriedQuestions: state.retriedQuestions + 1 };
    case quizActionTypes.addRetriedQuestionsIds:
      return {
        ...state,
        retriedQuestionIds: [...state.retriedQuestionIds, action.payload],
      };
    default:
      return state;
  }
};

const initialQuizState = {
  quizIndex: 0,
  isQuizComplete: false,
  showValidAnswerPopup: false,
  showInvalidAnswerPopup: false,
  isTimerRunning: true,
  timeLeft: 45,
  selectedOption: null,
  triedQuestions: 0,
  retriedQuestions: 0,
  retriedQuestionIds: [],
};

function Quiz({ quizzes, onQuizMinimize, onNextLessonClick }) {
  const [quizState, quizDispatchFn] = useReducer(quizReducer, initialQuizState);

  const {
    quizIndex,
    isQuizComplete,
    showValidAnswerPopup,
    showInvalidAnswerPopup,
    isTimerRunning,
    timeLeft,
    selectedOption,
    triedQuestions,
    retriedQuestions,
    retriedQuestionIds,
  } = quizState;

  const startTimer = () => {
    quizDispatchFn({ type: quizActionTypes.isTimerRunning, payload: true });
  };

  const pauseTimer = () => {
    quizDispatchFn({ type: quizActionTypes.isTimerRunning, payload: false });
  };

  const closePopups = () => {
    quizDispatchFn({ type: quizActionTypes.validAnswerPopup, payload: false });
    quizDispatchFn({
      type: quizActionTypes.inValidAnswerPopup,
      payload: false,
    });
  };

  const answerCheckHandler = () => {
    pauseTimer();
    const correctAnswer = quizzes[quizIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      quizDispatchFn({ type: quizActionTypes.validAnswerPopup, payload: true });

      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        quizDispatchFn({ type: quizActionTypes.incrementTriedQuestions });
      }
    } else {
      quizDispatchFn({
        type: quizActionTypes.inValidAnswerPopup,
        payload: true,
      });

      if (!retriedQuestionIds.includes(quizzes[quizIndex].id)) {
        quizDispatchFn({ type: quizActionTypes.incrementRetriedQuestions });
        quizDispatchFn({
          type: quizActionTypes.addRetriedQuestionsIds,
          payload: quizzes[quizIndex].id,
        });
      }
    }
  };

  const nextQuestionHandler = () => {
    startTimer();
    closePopups();

    if (quizIndex < quizzes.length - 1) {
      quizDispatchFn({
        type: quizActionTypes.quizIndex,
        payload: quizIndex + 1,
      });
    } else {
      quizDispatchFn({ type: quizActionTypes.isQuizComplete, payload: true });
    }
  };

  const retryQuestionHandler = () => {
    startTimer();
    closePopups();
  };

  const optionClickHandler = (option) => {
    if (isTimerRunning) {
      quizDispatchFn({ type: quizActionTypes.selectedOption, payload: option });
    }
  };

  useEffect(() => {
    let timerId;

    if (isTimerRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        quizDispatchFn({
          type: quizActionTypes.timeLeft,
          payload: timeLeft - 1,
        });
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
