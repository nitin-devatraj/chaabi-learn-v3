import React, { useState } from "react";
import styles from "./Tab.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/component-icons/accordian/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/component-icons/accordian/arrow-down.svg";
import { ReactComponent as LockIcon } from "../../../assets/component-icons/accordian/lock-icon.svg";
import { ReactComponent as UnlockIcon } from "../../../assets/component-icons/accordian/unlock-icon.svg";
import { useNavigate } from "react-router-dom";

function AccordianTab({ item }) {
  const navigate = useNavigate();
  const [isTabClicked, setIsTabClicked] = useState(false);

  function tabClickHandler() {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  }

  const lessonClickHandler = (lessonId, lessonType, lessonName) => {
    navigate(`/lesson/${lessonId}?name=${lessonName}&type=${lessonType}`);
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
            onClick={() => lessonClickHandler(item.id, item.type, item.name)}
          >
            {item.access === true ? <UnlockIcon /> : <LockIcon />}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
}

export default AccordianTab;
