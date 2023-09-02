import React, { useState } from "react";
import styles from "./Tab.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/component-icons/accordian/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/component-icons/accordian/arrow-down.svg";
import { ReactComponent as LockIcon } from "../../../assets/component-icons/accordian/lock-icon.svg";
import { ReactComponent as UnlockIcon } from "../../../assets/component-icons/accordian/unlock-icon.svg";

function AccordianTab({ item }) {
  const [isTabClicked, setIsTabClicked] = useState(false);

  console.log(Array.isArray(item.lessonsList));

  function tabClickHandler() {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  }

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab} onClick={tabClickHandler}>
        <div>{item.chapterName}</div>
        {isTabClicked ? <ArrowDownIcon /> : <ArrowRightIcon />}
      </div>
      {isTabClicked &&
        item.lessonsList.map((item) => (
          <div className={styles.tabContent}>
            {item.access === true ? <UnlockIcon /> : <LockIcon />}
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
}

export default AccordianTab;
