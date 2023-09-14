import React from "react";
import styles from "./ValidAnswerPopup.module.scss";
import { ReactComponent as ValidEmoji } from "../../../assets/icons/features/quiz/valid-answer-popup/valid-answer-emoji.svg";

function ValidAnswerPopup({ onNextQuestion }) {
  return (
    <div className={styles.validAnswerPopupContainer}>
      <ValidEmoji />
      <h6 className={styles.popupTitle}>Good Job, You're Right</h6>
      <p className={styles.popupText}>
        Right answer explanation text that a client enters at the backend. Right
        answer explanation text that a client enters at the backend. Right
        answer explanation text that
      </p>
      {/* <div className={styles.explanationVideo}></div> */}
      <button className={styles.actionButton} onClick={onNextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default ValidAnswerPopup;

// import React from "react";
// import styles from "./ValidAnswerPopup.module.scss";

// function ValidAnswerPopup({ onNextQuestion }) {
//   return (
//     <div className={styles.validAnswerPopup}>
//       <p className={styles.popupText}>
//         Congratulations! Your answer is correct.
//       </p>
//       <button className={styles.nextQuestionBtn} onClick={onNextQuestion}>
//         Next Question
//       </button>
//     </div>
//   );
// }

// export default ValidAnswerPopup;
