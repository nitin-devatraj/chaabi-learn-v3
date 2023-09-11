import React, { useState } from "react";
import styles from "./Tab.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/lock-icon.svg";
import { ReactComponent as UnlockIcon } from "../../../assets/icons/unlock-icon.svg";

function Tab({ item }) {
  const [isTabClicked, setIsTabClicked] = useState(false);
  const chapterId = item.id;

  const tabClickHandler = () => {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  };

  const emptyFunc = () => {};

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab} onClick={tabClickHandler}>
        <div>{item.chapterName}</div>
        {isTabClicked ? <ArrowDownIcon /> : <ArrowRightIcon />}
      </div>
      {isTabClicked &&
        item.lessonsList.map((item) => (
          <div
            key={item.id}
            className={styles.tabContent}
            onClick={item.onClick ?? emptyFunc}
          >
            {item.access === true ? <UnlockIcon /> : <LockIcon />}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
}

export default Tab;
