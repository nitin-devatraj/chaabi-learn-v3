import React from "react";
import styles from "./TrainingSummary.module.scss";
import typography from "../../../global-styles/global-styles.module.scss";

function TrainingSummary() {
  return (
    <div className={styles.trainingSummary}>
      <span className={typography.t4Lite}>Your Training Summary</span>
      <div className={styles.summaryDataContainer}>
        <div className={styles.summaryData}>
          <span className={typography.t5Lite}>In Progress</span>
          <h4 className={styles.summaryChart}>12</h4>
        </div>

        <div className={styles.summaryData}>
          <span className={typography.t5Lite}>Not Started</span>
          <div className={styles.summaryChart}>14</div>
        </div>

        <div className={styles.summaryData}>
          <span className={typography.t5Lite}>Completed</span>
          <div className={styles.summaryChart}>16</div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSummary;
