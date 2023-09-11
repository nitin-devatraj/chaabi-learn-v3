import React, { useState } from "react";
import styles from "./TrainingContent.module.scss";
import TabGroup from "../../../components/TabGroup/TabGroup";
import Accordion from "../../../components/Accordion/Accordion";
import typography from "../../../global-styles/global-styles.module.scss";

function TrainingContent({ chapterList }) {
  const [selectedTab, setSelectedTab] = useState(null);

  function handleTabSelection(tabValue) {
    setSelectedTab(tabValue);
  }

  return (
    <div className={styles.trainingContentContainer}>
      <TabGroup tabs={["About", "Lessons"]} onTabSelect={handleTabSelection} />
      {selectedTab === "About" ? (
        <section className={styles.trainingAboutSection}>
          <p className={typography.t3Reg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            auctor quam nec enim tempor, vel pretium justo luctus. Ut eu
            efficitur nibh, a facilisis justo. Mauris dictum velit porta
            pharetra rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Phasellus auctor quam nec enim tempor,
          </p>
        </section>
      ) : (
        <div className={styles.lessonsAccordianContainer}>
          <Accordion tabs={chapterList} />
        </div>
      )}
    </div>
  );
}

export default TrainingContent;
