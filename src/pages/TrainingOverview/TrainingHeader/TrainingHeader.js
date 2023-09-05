import React from "react";
import styles from "./TrainingHeader.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/icons/pages/training-overview/training-header/back-icon.svg";

function TrainingHeader() {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate("/dashboard");
  };

  return (
    <header className={styles.trainingHeaderContainer}>
      <button className={styles.backButton} onClick={backButtonHandler}>
        <BackIcon />
      </button>
      <p className={typography.t3Med}>Zippee Rider Training Module</p>
    </header>
  );
}

export default TrainingHeader;
