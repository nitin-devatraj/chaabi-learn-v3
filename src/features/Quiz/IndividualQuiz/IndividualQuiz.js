// import React, { useState } from "react";
// import styles from "./IndividualQuiz.module.scss";
// import QuizCheckBox from "../../../components/Buttons/QuizCheckBox/QuizCheckBox";
// import typography from "../../../global-styles/global-styles.module.scss";

// function IndividualQuiz({ quizName, quizOptions }) {
//   const [isOption1Selected, setIsOption1Selected] = useState(false);
//   const [isOption2Selected, setIsOption2Selected] = useState(false);
//   const [isOption3Selected, setIsOption3Selected] = useState(false);
//   const [isOption4Selected, setIsOption4Selected] = useState(false);

//   const option1ClickHandler = () => {
//     setIsOption1Selected((prevState) => !prevState);
//   };

//   const option2ClickHandler = () => {
//     setIsOption2Selected((prevState) => !prevState);
//   };

//   const option3ClickHandler = () => {
//     setIsOption3Selected((prevState) => !prevState);
//   };

//   const option4ClickHandler = () => {
//     setIsOption4Selected((prevState) => !prevState);
//   };

//   return (
//     <div className={styles.individualQuizContainer}>
//       <p className={typography.t2Reg}>Q. {quizName} ?</p>

//       <button className={styles.quizOptionBtn} onClick={option1ClickHandler}>
//         <QuizCheckBox
//           isSelected={isOption1Selected}
//           onToggle={option1ClickHandler}
//         />
//         <span className={styles.quizOptionText}>{quizOptions[0]}</span>
//       </button>
//       <button className={styles.quizOptionBtn} onClick={option2ClickHandler}>
//         <QuizCheckBox
//           isSelected={isOption2Selected}
//           onToggle={option2ClickHandler}
//         />
//         <span className={styles.quizOptionText}>{quizOptions[1]}</span>
//       </button>
//       <button className={styles.quizOptionBtn} onClick={option3ClickHandler}>
//         <QuizCheckBox
//           isSelected={isOption3Selected}
//           onToggle={option3ClickHandler}
//         />
//         <span className={styles.quizOptionText}>{quizOptions[2]}</span>
//       </button>
//       <button className={styles.quizOptionBtn} onClick={option4ClickHandler}>
//         <QuizCheckBox
//           isSelected={isOption4Selected}
//           onToggle={option4ClickHandler}
//         />
//         <span className={styles.quizOptionText}>{quizOptions[3]}</span>
//       </button>
//     </div>
//   );
// }

// export default IndividualQuiz;

import React from "react";
import styles from "./IndividualQuiz.module.scss";
import QuizCheckBox from "../../../components/Buttons/QuizCheckBox/QuizCheckBox";
import typography from "../../../global-styles/global-styles.module.scss";

function IndividualQuiz({
  quizName,
  quizOptions,
  optionClickHandler,
  selectedOption,
}) {
  return (
    <div className={styles.individualQuizContainer}>
      <p className={typography.t2Reg}>Q. {quizName} ?</p>

      {quizOptions.map((quizOption, index) => {
        const quizOptionBtnStyles = `${styles.quizOptionBtn} ${
          selectedOption === quizOption && styles.selectedOption
        }`;

        const optionHandler = () => {
          optionClickHandler(quizOption);
        };

        return (
          <button
            key={index}
            className={quizOptionBtnStyles}
            onClick={optionHandler}
          >
            <QuizCheckBox
              isSelected={selectedOption === quizOption}
              onToggle={optionHandler}
            />
            <span className={styles.quizOptionText}>{quizOption}</span>
          </button>
        );
      })}
    </div>
  );
}

export default IndividualQuiz;
