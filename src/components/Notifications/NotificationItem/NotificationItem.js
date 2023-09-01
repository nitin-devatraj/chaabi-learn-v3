import React from "react";
import styles from "./NotificationItem.module.scss";
import { ReactComponent as AlertIcon } from "../../../assets/icons/notification-icons/alert-icon.svg";
import { ReactComponent as CancelIcon } from "../../../assets/icons/notification-icons/cancel-icon.svg";
import { ReactComponent as SuccessIcon } from "../../../assets/icons/notification-icons/success-icon.svg";
import { ReactComponent as InfoIcon } from "../../../assets/icons/notification-icons/info-icon.svg";
import { ReactComponent as WarningIcon } from "../../../assets/icons/notification-icons/warning-icon.svg";

function NotificationItem({ item }) {
  return (
    <div
      className={`${styles.notificationItem} ${
        item.type === "alert"
          ? styles.alert
          : item.type === "success"
          ? styles.success
          : item.type === "warning"
          ? styles.warning
          : styles.info
      }`}
    >
      <div className={styles.notificationHeader}>
        {item.type === "alert" ? (
          <AlertIcon />
        ) : item.type === "success" ? (
          <SuccessIcon />
        ) : item.type === "warning" ? (
          <WarningIcon />
        ) : (
          <InfoIcon />
        )}
        <div className={styles.notificationTitle}>{item.title}</div>
        <div className={styles.cancelIconContainer}>
          <CancelIcon />
        </div>
      </div>
      <div className={styles.notificationContent}>{item.content}</div>
    </div>
  );
}

export default NotificationItem;
