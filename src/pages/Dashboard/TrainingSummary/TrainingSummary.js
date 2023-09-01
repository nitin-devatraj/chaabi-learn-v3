import React from "react";
import styles from "./TrainingSummary.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import colorTheme from "../../../global-styles/color-theme.module.scss";

function TrainingSummary() {
  return (
    <div className={styles.trainingSummary}>
      <span className={typography.t4Lite}>Your Training Summary</span>
      <div className={styles.summaryDataContainer}>
        <div className={styles.summaryData}>
          <span className={`${typography.t5Lite}  ${styles.summaryDataText} `}>
            In Progress
          </span>
          <div
            className={`${styles.summaryChart} ${colorTheme.lightThemeLowest} ${typography.h4Reg}`}
          >
            12
          </div>
        </div>
        <div className={styles.summaryData}>
          <span className={`${typography.t5Lite}  ${styles.summaryDataText} `}>
            Not Started
          </span>

          <div
            className={`${styles.summaryChart} ${colorTheme.lightThemeLowest} ${typography.h4Reg}`}
          >
            14
          </div>
        </div>
        <div className={styles.summaryData}>
          <span className={`${typography.t5Lite}  ${styles.summaryDataText} `}>
            Completed
          </span>
          <div
            className={`${styles.summaryChart} ${colorTheme.lightThemeLowest} ${typography.h4Reg}`}
          >
            16
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSummary;
