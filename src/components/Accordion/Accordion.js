import React from "react";
import styles from "./Accordion.module.scss";
import Tab from "./Tab/Tab";

function Accordion({ tabs }) {
  return (
    <div className={styles.accordionContainer}>
      {tabs.map((item) => (
        <Tab item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accordion;
