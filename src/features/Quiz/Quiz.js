// import React, { useState } from "react";
// import styles from "./Quiz.module.scss";
// import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
// import QuizHeader from "./QuizHeader/QuizHeader";
// import QuizProgress from "./QuizProgress/QuizProgress";
// import IndividualQuiz from "./IndividualQuiz/IndividualQuiz";
// import QuizResult from "./QuizResult/QuizResult";
// import ValidAnswerPopup from "./ValidAnswerPopup/ValidAnswerPopup";
// import InvalidAnswerPopup from "./InvalidAnswerPopup/InvalidAnswerPopup";

// const quizzes = [
//   {
//     id: 1,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 2,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 3,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 4,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 5,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 6,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 7,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 8,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 9,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
//   {
//     id: 10,
//     name: "what is the capital of india",
//     options: ["delhi", "bombay", "calcutta", "hyd"],
//   },
// ];

// function Quiz({ onQuizMinimize }) {
//   const [isQuizComplete, setIsQuizComplete] = useState(false);

//   const quizCompleteHandler = () => {
//     setIsQuizComplete((prevState) => !prevState);
//   };

//   return (
//     <div className={styles.quizContainer}>
//       <div className={styles.quizDetails}>
//         <QuizHeader
//           onQuizMinimize={onQuizMinimize}
//           isQuizComplete={isQuizComplete}
//         />

//         <QuizProgress />

//         <IndividualQuiz
//           quizName={quizzes[0].name}
//           quizOptions={quizzes[0].options}
//         />

//         {isQuizComplete === true && (
//           <QuizResult onNextLesson={quizCompleteHandler} />
//         )}
//       </div>

//       <PrimaryButton onClick={quizCompleteHandler}>Check Answer</PrimaryButton>

//       {/* <ValidAnswerPopup /> */}

//       {/* <InvalidAnswerPopup /> */}
//     </div>
//   );
// }

// export default Quiz;

import React, { useState, useEffect } from "react";
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
    name: "What is the color of the sky during the day?",
    options: ["Blue", "Red", "Green", "Yellow"],
    correctAnswer: "Blue",
  },
  {
    id: 2,
    name: "How many fingers do most humans have on one hand?",
    options: ["Five", "Three", "Ten", "Two"],
    correctAnswer: "Five",
  },
  {
    id: 3,
    name: "What is the opposite of 'up'?",
    options: ["Down", "Left", "Right", "Front"],
    correctAnswer: "Down",
  },
  {
    id: 4,
    name: "Which animal says 'meow'?",
    options: ["Cat", "Dog", "Elephant", "Lion"],
    correctAnswer: "Cat",
  },
  {
    id: 5,
    name: "What do you use to write on paper?",
    options: ["Pencil", "Spoon", "Shoe", "Phone"],
    correctAnswer: "Pencil",
  },
  {
    id: 6,
    name: "What comes after Monday?",
    options: ["Tuesday", "Saturday", "Sunday", "Wednesday"],
    correctAnswer: "Tuesday",
  },
  {
    id: 7,
    name: "What is the shape of a soccer ball?",
    options: ["Round", "Square", "Triangle", "Oval"],
    correctAnswer: "Round",
  },
  {
    id: 8,
    name: "Which season comes after winter?",
    options: ["Spring", "Summer", "Fall", "Autumn"],
    correctAnswer: "Spring",
  },
  {
    id: 9,
    name: "What is the primary color of grass?",
    options: ["Green", "Red", "Blue", "Yellow"],
    correctAnswer: "Green",
  },
  {
    id: 10,
    name: "What do you use to protect your head from rain?",
    options: ["Umbrella", "Shovel", "Sunglasses", "Hat"],
    correctAnswer: "Umbrella",
  },
];

function Quiz({ onQuizMinimize }) {
  const [quizIndex, setQuizIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [showValidAnswerPopup, setShowValidAnswerPopup] = useState(false);
  const [showInvalidAnswerPopup, setShowInvalidAnswerPopup] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [selectedOption, setSelectedOption] = useState(null);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const answerCheckHandler = () => {
    pauseTimer();
    const correctAnswer = quizzes[quizIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      setShowValidAnswerPopup(true);
    } else {
      setShowInvalidAnswerPopup(true);
    }
  };

  const nextQuestionHandler = () => {
    startTimer();
    setShowValidAnswerPopup(false);
    setShowInvalidAnswerPopup(false);

    if (quizIndex < quizzes.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const retryQuestionHandler = () => {
    startTimer();
    setShowValidAnswerPopup(false);
    setShowInvalidAnswerPopup(false);
  };

  const optionClickHandler = (option) => {
    if (isTimerRunning) {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    let timer;

    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
      pauseTimer();
    };
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    startTimer();
  }, []);

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

        {isQuizComplete === true && <QuizResult />}
      </div>

      <PrimaryButton onClick={answerCheckHandler}>Check Answer</PrimaryButton>

      {showValidAnswerPopup && (
        <ValidAnswerPopup onNextQuestion={nextQuestionHandler} />
      )}

      {showInvalidAnswerPopup && (
        <InvalidAnswerPopup onRetryQuestion={retryQuestionHandler} />
      )}
    </div>
  );
}

export default Quiz;
