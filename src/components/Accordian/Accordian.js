import React from "react";
import styles from "./Accordian.module.scss";
import AccordianTab from "./AccordianTab/AccordianTab";

function Accordian({ tabs }) {
  return (
    <div className={styles.accordianContainer}>
      {tabs.map((item) => (
        <AccordianTab item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accordian;
