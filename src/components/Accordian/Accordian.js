import React from "react";
import styles from "./Accordian.module.scss";
import Tab from "./Tab/Tab";

function Accordian({ tabs }) {
  return (
    <div className={styles.accordianContainer}>
      {tabs.map((item, index) => (
        <Tab item={item} key={index} />
      ))}
    </div>
  );
}

export default Accordian;
