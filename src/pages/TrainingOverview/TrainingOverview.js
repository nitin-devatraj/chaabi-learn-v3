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
      `/lesson/${firstLessonId}?name=${firstLessonName}&type=${firstLessonType}&chapterId=${firstChapterId}`
    );
  };

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
              `/lesson/${1}?name=${"Quiz lesson"}&type=${"quiz"}&chapterId=${1}`
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
              `/lesson/${2}?name=${"Assessment lesson"}&type=${"assessment"}&chapterId=${1}`
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
              `/lesson/${3}?name=${"Video lesson"}&type=${"video"}&chapterId=${1}`
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
              `/lesson/${4}?name=${"Document lesson"}&type=${"document"}&chapterId=${2}`
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
              `/lesson/${5}?name=${"Audio lesson"}&type=${"audio"}&chapterId=${2}`
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
              `/lesson/${6}?name=${"Quiz lesson"}&type=${"quiz"}&chapterId=${3}`
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
              `/lesson/${7}?name=${"Assessment lesson"}&type=${"assessment"}&chapterId=${3}`
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
              `/lesson/${8}?name=${"Video lesson"}&type=${"video"}&chapterId=${3}`
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
              `/lesson/${9}?name=${"Document lesson"}&type=${"document"}&chapterId=${4}`
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
              `/lesson/${10}?name=${"Audio lesson"}&type=${"audio"}&chapterId=${4}`
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
              `/lesson/${11}?name=${"Quiz lesson"}&type=${"quiz"}&chapterId=${5}`
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
              `/lesson/${12}?name=${"Assessment lesson"}&type=${"assessment"}&chapterId=${5}`
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
              `/lesson/${13}?name=${"Video lesson"}&type=${"video"}&chapterId=${5}`
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
              `/lesson/${14}?name=${"Document lesson"}&type=${"document"}&chapterId=${6}`
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
              `/lesson/${15}?name=${"Audio lesson"}&type=${"audio"}&chapterId=${6}`
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
              `/lesson/${16}?name=${"Quiz lesson"}&type=${"quiz"}&chapterId=${7}`
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
              `/lesson/${17}?name=${"Assessment lesson"}&type=${"assessment"}&chapterId=${7}`
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
              `/lesson/${18}?name=${"Video lesson"}&type=${"video"}&chapterId=${7}`
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
              `/lesson/${19}?name=${"Document lesson"}&type=${"document"}&chapterId=${8}`
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
              `/lesson/${20}?name=${"Audio lesson"}&type=${"audio"}&chapterId=${8}`
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
              `/lesson/${21}?name=${"Quiz lesson"}&type=${"quiz"}&chapterId=${9}`
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
              `/lesson/${22}?name=${"Assessment lesson"}&type=${"assessment"}&chapterId=${9}`
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
              `/lesson/${23}?name=${"Video lesson"}&type=${"video"}&chapterId=${9}`
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
              `/lesson/${24}?name=${"Document lesson"}&type=${"document"}&chapterId=${10}`
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
              `/lesson/${25}?name=${"Audio lesson"}&type=${"audio"}&chapterId=${10}`
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
