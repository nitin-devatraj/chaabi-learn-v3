import React, { useState } from "react";
import styles from "./Tab.module.scss";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down.svg";

function AccordianTab({ item }) {
  const [isTabClicked, setIsTabClicked] = useState(false);

  function tabClickHandler() {
    setIsTabClicked((isTabClicked) => !isTabClicked);
  }

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tab} onClick={tabClickHandler}>
        <div>{item}</div>
        {isTabClicked ? <ArrowDownIcon /> : <ArrowRightIcon />}
      </div>
      {isTabClicked && (
        <div className={styles.tabContent}>
          Wise men speak because they have something to say; fools because they
          have to say something.
        </div>
      )}
    </div>
  );
}

export default AccordianTab;
