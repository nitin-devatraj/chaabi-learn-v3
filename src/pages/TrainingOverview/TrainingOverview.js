import React from "react";
import styles from "./TrainingOverview.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import trainingBanner from "../../assets/dashboard-page-icons/course-img.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import TrainingContent from "./TrainingContent/TrainingContent";
import TrainingInfo from "./TrainingInfo/TrainingInfo";
import TrainingHeader from "./TrainingHeader/TrainingHeader";

const chapterList = [
  {
    id: 1,
    chapterName: "chapter 1",
    lessonsList: [
      { id: 1, name: "Quiz lesson", access: true, type: "quiz" },
      { id: 2, name: "Assessment lesson", access: false, type: "assessment" },
      { id: 3, name: "Video lesson", access: true, type: "video" },
    ],
  },
  {
    id: 2,
    chapterName: "chapter 2",
    lessonsList: [
      { id: 4, name: "Document lesson", access: true, type: "document" },
      { id: 5, name: "Audio lesson", access: false, type: "audio" },
    ],
  },

  {
    id: 3,
    chapterName: "chapter 3",
    lessonsList: [
      { id: 6, name: "Quiz lesson", access: true, type: "quiz" },
      { id: 7, name: "Assessment lesson", access: false, type: "assessment" },
      { id: 8, name: "Video lesson", access: true, type: "video" },
    ],
  },
  {
    id: 4,
    chapterName: "chapter 4",
    lessonsList: [
      { id: 9, name: "Document lesson", access: true, type: "document" },
      { id: 10, name: "Audio lesson", access: false, type: "audio" },
    ],
  },

  {
    id: 5,
    chapterName: "chapter 5",
    lessonsList: [
      { id: 11, name: "Quiz lesson", access: true, type: "quiz" },
      {
        id: 12,
        name: "Assessment lesson",
        access: false,
        type: "assessment",
      },
      { id: 13, name: "Video lesson", access: true, type: "video" },
    ],
  },
  {
    id: 6,
    chapterName: "chapter 2",
    lessonsList: [
      { id: 14, name: "Document lesson", access: true, type: "document" },
      { id: 15, name: "Audio lesson", access: false, type: "audio" },
    ],
  },

  {
    id: 7,
    chapterName: "chapter 7",
    lessonsList: [
      { id: 16, name: "Quiz lesson", access: true, type: "quiz" },
      {
        id: 17,
        name: "Assessment lesson",
        access: false,
        type: "assessment",
      },
      { id: 18, name: "Video lesson", access: true, type: "video" },
    ],
  },
  {
    id: 8,
    chapterName: "chapter 8",
    lessonsList: [
      { id: 19, name: "Document lesson", access: true, type: "document" },
      { id: 20, name: "Audio lesson", access: false, type: "audio" },
    ],
  },

  {
    id: 9,
    chapterName: "chapter 9",
    lessonsList: [
      { id: 21, name: "Quiz lesson", access: true, type: "quiz" },
      {
        id: 22,
        name: "Assessment lesson",
        access: false,
        type: "assessment",
      },
      { id: 23, name: "Video lesson", access: true, type: "video" },
    ],
  },
  {
    id: 10,
    chapterName: "chapter 10",
    lessonsList: [
      { id: 24, name: "Document lesson", access: true, type: "document" },
      { id: 25, name: "Audio lesson", access: false, type: "audio" },
    ],
  },
];

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

  return (
    <div className={styles.trainingOverviewContainer}>
      <TrainingHeader />

      <img src={trainingBanner} alt="#" className={styles.trainingBanner} />

      <TrainingInfo />

      <TrainingContent chapterList={chapterList} />

      <PrimaryButton onClick={startTrainingBtnHandler}>
        Start Your Training
      </PrimaryButton>
    </div>
  );
}

export default TrainingOverview;
