import React from "react";
import styles from "./LessonCardHeader.module.scss";
import { useNavigate } from "react-router-dom";
import typography from "../../../global-styles/typography.module.scss";
import { ReactComponent as BackIcon } from "../../../assets/icons/pages/lesson-card/lesson-card-header/back-icon.svg";

function LessonCardHeader() {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate(`/training-overview/${Math.random().toFixed(2)}`);
  };

  return (
    <header className={styles.lessonCardHeader}>
      <button className={styles.backButton} onClick={backButtonHandler}>
        <BackIcon />
      </button>
      <p className={typography.t3Med}>Zippee Rider Training Module</p>
    </header>
  );
}

export default LessonCardHeader;
