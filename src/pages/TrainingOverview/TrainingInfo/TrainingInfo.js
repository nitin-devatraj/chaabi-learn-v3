import React from "react";
import styles from "./TrainingInfo.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import { ReactComponent as ClockIcon } from "../../../assets/training-overview-icons/clock-icon.svg";

function TrainingInfo() {
  return (
    <div className={styles.trainingInfo}>
      <ClockIcon />
      <div>
        <span className={typography.t4Reg}>10 lessons</span>,
        <span className={typography.t4Reg}>10 quizzes</span>
      </div>
    </div>
  );
}

export default TrainingInfo;
