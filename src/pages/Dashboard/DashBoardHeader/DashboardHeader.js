import React from "react";
import styles from "./DashboardHeader.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import logo from "../../../assets/icons/pages/Dashboard/DashboardHeader/logo.png";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/pages/Dashboard/DashboardHeader/notification.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/pages/Dashboard/DashboardHeader/profile.svg";

function DashboardHeader() {
  return (
    <header className={styles.dashboardHeaderContainer}>
      <nav className={styles.headerNav}>
        <img src={logo} alt="#" className={styles.logo} />
        <div className={styles.navButtons}>
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </nav>
      <h6 className={typography.h6Med}>Hello, Puneet Dhiman</h6>
    </header>
  );
}

export default DashboardHeader;
