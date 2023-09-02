import React, { useState, useEffect } from "react";
import styles from "./TabGroup.module.scss";

function TabGroup({ tabs, onTabSelect }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  function TabClickHandler(event) {
    setSelectedTab(event.target.id);
    onTabSelect(event.target.id);
  }

  useEffect(() => {
    onTabSelect(selectedTab);
  }, []);

  return (
    <div className={styles.tabGroupContainer}>
      {tabs.map((item) => (
        <button
          className={selectedTab === item ? styles.selectedTab : styles.tab}
          key={item}
          id={item}
          onClick={TabClickHandler}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TabGroup;
