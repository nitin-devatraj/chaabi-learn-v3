import React from "react";
import styles from "./TrainingOverview.module.scss";
import { useParams } from "react-router-dom";
import trainingBanner from "../../assets/dashboard-page-icons/course-img.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import TrainingContent from "./TrainingContent/TrainingContent";
import TrainingInfo from "./TrainingInfo/TrainingInfo";
import TrainingHeader from "./TrainingHeader/TrainingHeader";

function TrainingOverview() {
  const { trainingId } = useParams();

  const startTrainingBtnHandler = () => {};

  return (
    <div className={styles.trainingOverviewContainer}>
      <TrainingHeader />

      <img src={trainingBanner} alt="#" className={styles.trainingBanner} />

      <TrainingInfo />

      <TrainingContent />

      <PrimaryButton onClick={startTrainingBtnHandler}>
        Start Your Training
      </PrimaryButton>
    </div>
  );
}

export default TrainingOverview;
