import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./TrainingHeader.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import colorTheme from "../../../global-styles/color-theme.module.scss";
import { ReactComponent as BackIcon } from "../../../assets/training-overview-icons/back-icon.svg";

function TrainingHeader() {
  const navigate = useNavigate();

  const backButtonHandler = () => {
    navigate("/dashboard");
  };

  return (
    <header className={styles.trainingHeader}>
      <button
        className={`${styles.backButton} ${colorTheme.lightThemeRegular}`}
        onClick={backButtonHandler}
      >
        <BackIcon />
      </button>
      <p className={`${typography.t3Med} ${styles.trainingName}`}>
        Zippee Rider Training Module
      </p>
    </header>
  );
}

export default TrainingHeader;
