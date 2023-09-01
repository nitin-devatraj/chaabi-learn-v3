import React from "react";
import styles from "./ProgressBar.module.scss";
import colorTheme from "../../global-styles/color-theme.module.scss";

function ProgressBar({ progress }) {
  const progressBar = {
    background: "#12B76A",
    width: `${progress}%`,
    height: "100%",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div
      className={`${styles.progressBarContainer} ${colorTheme.lightThemeLowest}`}
    >
      <div style={progressBar}></div>
    </div>
  );
}

export default ProgressBar;
