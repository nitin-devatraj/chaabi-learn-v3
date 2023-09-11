import React from "react";
import styles from "./TrainingOverview.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import trainingBanner from "../../assets/images/pages/training-overview/course-img.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import TrainingContent from "./TrainingContent/TrainingContent";
import TrainingInfo from "./TrainingInfo/TrainingInfo";
import TrainingHeader from "./TrainingHeader/TrainingHeader";

function TrainingOverview() {
  const { trainingId } = useParams();
  const navigate = useNavigate();

  const startTrainingBtnHandler = () => {
    const firstLessonId = chapterList[0].lessonsList[0].id;
    const firstLessonName = chapterList[0].lessonsList[0].name;
    const firstLessonType = chapterList[0].lessonsList[0].type;
    const firstChapterId = chapterList[0].id;

    navigate(
      `/lesson-id/${firstLessonId}/lesson-name/${firstLessonName}/lesson-type/${firstLessonType}/chapter-id/${firstChapterId}`
    );
  };

  // `/lesson-id/${}/lesson-name/${}/lesson-type/${}/chapter-id/${}`

  const chapterList = [
    {
      id: 1,
      chapterName: "chapter 1",
      lessonsList: [
        {
          id: 1,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${1}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${1}`
            );
          },
        },
        {
          id: 2,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${2}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${1}`
            );
          },
        },
        {
          id: 3,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${3}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${1}`
            );
          },
        },
      ],
    },
    {
      id: 2,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 4,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${4}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${2}`
            );
          },
        },
        {
          id: 5,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${5}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${2}`
            );
          },
        },
      ],
    },

    {
      id: 3,
      chapterName: "chapter 3",
      lessonsList: [
        {
          id: 6,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${6}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${3}`
            );
          },
        },
        {
          id: 7,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${7}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${3}`
            );
          },
        },
        {
          id: 8,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${8}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${3}`
            );
          },
        },
      ],
    },
    {
      id: 4,
      chapterName: "chapter 4",
      lessonsList: [
        {
          id: 9,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${9}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${4}`
            );
          },
        },
        {
          id: 10,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${10}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${4}`
            );
          },
        },
      ],
    },

    {
      id: 5,
      chapterName: "chapter 5",
      lessonsList: [
        {
          id: 11,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${11}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${5}`
            );
          },
        },
        {
          id: 12,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${12}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${5}`
            );
          },
        },
        {
          id: 13,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${13}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${5}`
            );
          },
        },
      ],
    },
    {
      id: 6,
      chapterName: "chapter 2",
      lessonsList: [
        {
          id: 14,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${14}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${6}`
            );
          },
        },
        {
          id: 15,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${15}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${6}`
            );
          },
        },
      ],
    },

    {
      id: 7,
      chapterName: "chapter 7",
      lessonsList: [
        {
          id: 16,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${16}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${7}`
            );
          },
        },
        {
          id: 17,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${17}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${7}`
            );
          },
        },
        {
          id: 18,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${18}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${7}`
            );
          },
        },
      ],
    },
    {
      id: 8,
      chapterName: "chapter 8",
      lessonsList: [
        {
          id: 19,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${19}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${8}`
            );
          },
        },
        {
          id: 20,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${20}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${8}`
            );
          },
        },
      ],
    },

    {
      id: 9,
      chapterName: "chapter 9",
      lessonsList: [
        {
          id: 21,
          name: "Quiz lesson",
          access: true,
          type: "quiz",
          onClick: () => {
            navigate(
              `/lesson-id/${21}/lesson-name/${"Quiz lesson"}/lesson-type/${"quiz"}/chapter-id/${9}`
            );
          },
        },
        {
          id: 22,
          name: "Assessment lesson",
          access: false,
          type: "assessment",
          onClick: () => {
            navigate(
              `/lesson-id/${22}/lesson-name/${"Assessment lesson"}/lesson-type/${"assessment"}/chapter-id/${9}`
            );
          },
        },
        {
          id: 23,
          name: "Video lesson",
          access: true,
          type: "video",
          onClick: () => {
            navigate(
              `/lesson-id/${23}/lesson-name/${"Video lesson"}/lesson-type/${"video"}/chapter-id/${9}`
            );
          },
        },
      ],
    },
    {
      id: 10,
      chapterName: "chapter 10",
      lessonsList: [
        {
          id: 24,
          name: "Document lesson",
          access: true,
          type: "document",
          onClick: () => {
            navigate(
              `/lesson-id/${24}/lesson-name/${"Document lesson"}/lesson-type/${"document"}/chapter-id/${10}`
            );
          },
        },
        {
          id: 25,
          name: "Audio lesson",
          access: false,
          type: "audio",
          onClick: () => {
            navigate(
              `/lesson-id/${25}/lesson-name/${"Audio lesson"}/lesson-type/${"audio"}/chapter-id/${10}`
            );
          },
        },
      ],
    },
  ];

  return (
    <div className={styles.trainingOverviewContainer}>
      <div className={styles.trainingOverview}>
        <TrainingHeader />

        <img src={trainingBanner} alt="#" className={styles.trainingBanner} />

        <TrainingInfo />

        <TrainingContent chapterList={chapterList} />
      </div>

      <PrimaryButton onClick={startTrainingBtnHandler}>
        Start Your Training
      </PrimaryButton>
    </div>
  );
}

export default TrainingOverview;
