import React, { useState } from "react";
import styles from "./TrainingContent.module.scss";
import TabGroup from "../../../components/TabGroup/TabGroup";
import Accordian from "../../../components/Accordian/Accordian";
import typography from "../../../global-styles/typography.module.scss";
import colorTheme from "../../../global-styles/color-theme.module.scss";

function TrainingContent() {
  const [selectedTab, setSelectedTab] = useState(null);

  function handleTabSelection(tabValue) {
    setSelectedTab(tabValue);
  }

  const chapterList = [
    {
      id: 1,
      chapterName: "chapter 1",
      lessonsList: [
        { name: "Quiz lesson", access: true },
        { name: "Assessment lesson", access: false },
        { name: "Video lesson", access: true },
      ],
    },
    {
      id: 2,
      chapterName: "chapter 2",
      lessonsList: [
        { name: "Document lesson", access: true },
        { name: "Audio lesson", access: false },
      ],
    },

    {
      id: 3,
      chapterName: "chapter 3",
      lessonsList: [
        { name: "Quiz lesson", access: true },
        { name: "Assessment lesson", access: false },
        { name: "Video lesson", access: true },
      ],
    },
    {
      id: 4,
      chapterName: "chapter 4",
      lessonsList: [
        { name: "Document lesson", access: true },
        { name: "Audio lesson", access: false },
      ],
    },

    {
      id: 5,
      chapterName: "chapter 5",
      lessonsList: [
        { name: "Quiz lesson", access: true },
        { name: "Assessment lesson", access: false },
        { name: "Video lesson", access: true },
      ],
    },
    {
      id: 6,
      chapterName: "chapter 2",
      lessonsList: [
        { name: "Document lesson", access: true },
        { name: "Audio lesson", access: false },
      ],
    },

    {
      id: 7,
      chapterName: "chapter 7",
      lessonsList: [
        { name: "Quiz lesson", access: true },
        { name: "Assessment lesson", access: false },
        { name: "Video lesson", access: true },
      ],
    },
    {
      id: 8,
      chapterName: "chapter 8",
      lessonsList: [
        { name: "Document lesson", access: true },
        { name: "Audio lesson", access: false },
      ],
    },

    {
      id: 9,
      chapterName: "chapter 9",
      lessonsList: [
        { name: "Quiz lesson", access: true },
        { name: "Assessment lesson", access: false },
        { name: "Video lesson", access: true },
      ],
    },
    {
      id: 10,
      chapterName: "chapter 10",
      lessonsList: [
        { name: "Document lesson", access: true },
        { name: "Audio lesson", access: false },
      ],
    },
  ];

  return (
    <div className={styles.trainingContent}>
      <TabGroup tabs={["About", "Lessons"]} onTabSelect={handleTabSelection} />
      {selectedTab === "About" ? (
        <section
          className={`${styles.trainingAboutSection} ${colorTheme.lightThemeRegular} `}
        >
          <p className={`${typography.t3Reg} ${styles.trainingAboutText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            auctor quam nec enim tempor, vel pretium justo luctus. Ut eu
            efficitur nibh, a facilisis justo. Mauris dictum velit porta
            pharetra rhoncus. Maecenas vitae auctor nisi. Suspendisse tincidunt,
            mi in semper tempus, justo massa sollicitudin nisi, ultricies
            pellentesque nibh lorem nec felis. Nullam dictum eleifend metus, nec
            varius mauris ornare quis. Vestibulum viverra orci libero, eget
            congue massa tristique eu
          </p>
        </section>
      ) : (
        <div className={styles.lessonsAccordianContainer}>
          <Accordian tabs={chapterList} />
        </div>
      )}
    </div>
  );
}

export default TrainingContent;
