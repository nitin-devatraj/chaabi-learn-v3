import React, { useReducer, useEffect } from "react";
import styles from "./Quiz.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import QuizHeader from "./QuizHeader/QuizHeader";
import QuizProgress from "./QuizProgress/QuizProgress";
import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
import QuizResult from "./QuizResult/QuizResult";
import ValidAnswerPopup from "./QuizPopups/ValidAnswerPopup/ValidAnswerPopup";
import InvalidAnswerPopup from "./QuizPopups/InvalidAnswerPopup/InvalidAnswerPopup";
import TimeoutPopup from "./QuizPopups/TimeoutPopup/TimeoutPopup";
import { ReactComponent as TimeoutEmoji } from "../../assets/icons/features/quiz/timeout-popup/timeout-emoji.svg";

const quizActionTypes = {
  quizIndex: "quizIndex",
  isQuizComplete: "isQuizComplete",
  validAnswerPopup: "validAnswerPopup",
  inValidAnswerPopup: "inValidAnswerPopup",
  timeoutPopup: "timeoutPopup",
  isTimerRunning: "isTimerRunning",
  timeLeft: "timeLeft",
  selectedOption: "selectedOption",
  isSelectedAnswerCorrect: "isSelectedAnswerCorrect",
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
    case quizActionTypes.timeoutPopup:
      return { ...state, showTimeoutPopup: action.payload };
    case quizActionTypes.isTimerRunning:
      return { ...state, isTimerRunning: action.payload };
    case quizActionTypes.timeLeft:
      return { ...state, timeLeft: action.payload };
    case quizActionTypes.selectedOption:
      return { ...state, selectedOption: action.payload };
    case quizActionTypes.isSelectedAnswerCorrect:
      return { ...state, isSelectedAnswerCorrect: action.payload };
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
  showTimeoutPopup: false,
  isTimerRunning: true,
  timeLeft: 15,
  selectedOption: null,
  isSelectedAnswerCorrect: false,
  triedQuestions: 0,
  retriedQuestions: 0,
  retriedQuestionIds: [],
};

function Quiz({ quizzes, onQuizMinimize, onNextLessonClick }) {
  const [quizState, quizDispatchFn] = useReducer(quizReducer, initialQuizState);

  const quizTimeoutData = {
    title: "Time Expired",
    text: "Your time is up for this Quiz. Continue to the result page to review your performance",
    emoji: TimeoutEmoji,
  };

  const {
    quizIndex,
    isQuizComplete,
    showValidAnswerPopup,
    showInvalidAnswerPopup,
    showTimeoutPopup,
    isTimerRunning,
    timeLeft,
    selectedOption,
    isSelectedAnswerCorrect,
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

  const timeoutHandler = () => {
    quizDispatchFn({
      type: quizActionTypes.timeoutPopup,
      payload: true,
    });
  };

  const quizCompleteHandler = () => {
    quizDispatchFn({
      type: quizActionTypes.timeoutPopup,
      payload: false,
    });
    quizDispatchFn({ type: quizActionTypes.isQuizComplete, payload: true });
  };

  const answerCheckHandler = () => {
    pauseTimer();
    const correctAnswer = quizzes[quizIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;
    quizDispatchFn({
      type: quizActionTypes.isSelectedAnswerCorrect,
      payload: isCorrect,
    });

    if (isCorrect) {
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
      timeoutHandler();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isTimerRunning, timeLeft]);

  // useEffect(() => {
  //   if (!isQuizComplete) {
  //     localStorage.setItem("timeLeft", timeLeft);
  //   }
  // }, [timeLeft, isQuizComplete]);

  // useEffect(() => {
  //   const savedTimeLeft = localStorage.getItem("timeLeft");
  //   if (savedTimeLeft) {
  //     quizDispatchFn({
  //       type: quizActionTypes.timeLeft,
  //       payload: +savedTimeLeft,
  //     });
  //   }
  // }, []);

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
          isCorrect={isSelectedAnswerCorrect}
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

      {showValidAnswerPopup === true && (
        <ValidAnswerPopup
          onNextQuestion={nextQuestionHandler}
          explanationTitle={quizzes[quizIndex].correctAnswerTitle}
          explanationText={quizzes[quizIndex].correctAnswerText}
          emoji={quizzes[quizIndex].correctAnswerEmoji}
        />
      )}

      {showInvalidAnswerPopup === true && (
        <InvalidAnswerPopup
          onRetryQuestion={retryQuestionHandler}
          explanationTitle={quizzes[quizIndex].incorrectAnswerTitle}
          explanationText={quizzes[quizIndex].incorrectAnswerText}
          emoji={quizzes[quizIndex].incorrectAnswerEmoji}
        />
      )}

      {showTimeoutPopup === true && (
        <TimeoutPopup
          timeoutTitle={quizTimeoutData.title}
          timeoutText={quizTimeoutData.text}
          onGoToResults={quizCompleteHandler}
          emoji={quizTimeoutData.emoji}
        />
      )}
    </div>
  );
}

export default Quiz;
