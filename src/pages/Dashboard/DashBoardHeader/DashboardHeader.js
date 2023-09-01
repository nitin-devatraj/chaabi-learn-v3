import React from "react";
import styles from "./DashboardHeader.module.scss";
import typography from "../../../global-styles/typography.module.scss";
import logo from "../../../assets/login-page-icons/logo.png";
import { ReactComponent as NotificationIcon } from "../../../assets/dashboard-page-icons/notification.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/dashboard-page-icons/profile.svg";

function DashboardHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <img src={logo} alt="#" className={styles.logo} />
        <div className={styles.navButtons}>
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </nav>
      <h6 className={`${typography.h6Med} ${styles.title}`}>
        Hello, Puneet Dhiman
      </h6>
    </header>
  );
}

export default DashboardHeader;
