import React from "react";
import styles from "./Accordian.module.scss";
import Tab from "./Tab/Tab";

function Accordian({ tabs }) {
  return (
    <div className={styles.accordianContainer}>
      {tabs.map((item) => (
        <Tab item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accordian;
