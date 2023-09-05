import React, { useState } from "react";
import styles from "./AccordianTab.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/components/accordian/accordian-tab/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/components/accordian/accordian-tab/arrow-down.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/components/accordian/accordian-tab/lock-icon.svg";
import { ReactComponent as UnlockIcon } from "../../../assets/icons/components/accordian/accordian-tab/unlock-icon.svg";
import { useNavigate } from "react-router-dom";

function AccordianTab({ item }) {
  const navigate = useNavigate();
  const [isTabClicked, setIsTabClicked] = useState(false);
  const chapterId = item.id;

  function tabClickHandler() {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  }

  const lessonClickHandler = (lessonId, lessonType, lessonName, chapterId) => {
    navigate(
      `/lesson/${lessonId}?name=${lessonName}&type=${lessonType}&chapterId=${chapterId}`
    );
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab} onClick={tabClickHandler}>
        <div>{item.chapterName}</div>
        {isTabClicked ? <ArrowDownIcon /> : <ArrowRightIcon />}
      </div>
      {isTabClicked &&
        item.lessonsList.map((item) => (
          <div
            className={styles.tabContent}
            onClick={() =>
              lessonClickHandler(item.id, item.type, item.name, chapterId)
            }
          >
            {item.access === true ? <UnlockIcon /> : <LockIcon />}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
}

export default AccordianTab;
