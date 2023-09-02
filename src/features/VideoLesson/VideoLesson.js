import React from "react";
import styles from "./VideoLesson.module.scss";

function VideoLesson({ orientation }) {
  return (
    <div className={styles.videoLessonContainer}>
      <iframe
        className={`${styles.videoPlayer} ${
          orientation === "portrait" ? styles.portraitMode : null
        }`}
        src="https://www.youtube.com/embed/uBk-Wst_7aA?si=pFKNWmrFhhmuIqEm"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoLesson;
