import React from "react";
import styles from "./LessonCardHeader.module.scss";
import { useNavigate } from "react-router-dom";
import typography from "../../../global-styles/typography.module.scss";
import colorTheme from "../../../global-styles/color-theme.module.scss";
import { ReactComponent as BackIcon } from "../../../assets/training-overview-icons/back-icon.svg";

function LessonCardHeader() {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate(`/training-overview/${Math.random().toFixed(2)}`);
  };

  return (
    <header className={styles.lessonCardHeader}>
      <button
        className={`${styles.backButton} ${colorTheme.lightThemeRegular}`}
        onClick={backButtonHandler}
      >
        <BackIcon />
      </button>
      <p className={`${typography.t3Med} ${styles.lessonName}`}>
        Zippee Rider Training Module
      </p>
    </header>
  );
}

export default LessonCardHeader;
