import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TrainingOverview from "./pages/TrainingOverview/TrainingOverview";
import LessonCard from "./pages/LessonCard/LessonCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/training-overview/:trainingId"
            element={<TrainingOverview />}
          />
          <Route
            path="/lesson-id/:lessonId/lesson-name/:lessonName/lesson-type/:lessonType/chapter-id/:chapterId"
            element={<LessonCard />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
