import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/table-icons/active-dot-icon.svg";
import { ReactComponent as InactiveIcon } from "../../../assets/icons/table-icons/inactive-dot-icon.svg";
import { ReactComponent as DraftIcon } from "../../../assets/icons/table-icons/draft-dot-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/table-icons/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/table-icons/edit-icon.svg";
import ToggleButton from "../../Buttons/ToggleButton/ToggleButton";

function TableItem({ item, onDelete }) {
  const firstThreeBadges = item.teams.slice(0, 3);
  const remainingCount = item.teams.length - 3;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [isNameEmpty, setIsNameEmpty] = useState(false);

  const rowDeleteHandler = () => {
    onDelete(item.id);
  };

  const rowEditHandler = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  const handleNameBlur = () => {
    if (editedName.trim() === "") {
      setIsNameEmpty(true);
      return;
    }

    setIsEditing(false);
    setIsNameEmpty(false);
  };

  const badgeTypeStyles =
    item.status === "active"
      ? styles.activeBadge
      : item.status === "inactive"
      ? styles.inactiveBadge
      : styles.draftBadge;

  const badgeIcon =
    item.status === "active" ? (
      <ActiveIcon />
    ) : item.status === "inactive" ? (
      <InactiveIcon />
    ) : (
      <DraftIcon />
    );

  return (
    <tr className={styles.tableItem}>
      <td className={styles.nameColumn}>
        <div className={styles.nameColumnContainer}>
          <ToggleButton />
          {isEditing ? (
            <div className={styles.name}>
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                onKeyDown={handleInputKeyDown}
                className={styles.input}
              />
              {isNameEmpty && (
                <div className={styles.requiredMessage}>required</div>
              )}
            </div>
          ) : (
            editedName
          )}
        </div>
      </td>
      <td className={styles.statusColumn}>
        <div className={`${styles.badge}  ${badgeTypeStyles}`}>
          {badgeIcon}
          {item.status}
        </div>
      </td>
      <td className={styles.roleColumn}>{item.role}</td>
      <td className={styles.emailColumn}>{item.email}</td>
      <td className={styles.teamsColumn}>
        <div className={styles.badges}>
          {firstThreeBadges.map((item, index) => {
            const badgeGroupStyles =
              index === 0
                ? styles.badgeGroup1
                : index === 1
                ? styles.badgeGroup2
                : styles.badgeGroup5;
            return (
              <div
                key={index}
                className={`${styles.badge} ${badgeGroupStyles}`}
              >
                {item}
              </div>
            );
          })}
          {remainingCount > 0 && (
            <div className={styles.remainingCount}>+{remainingCount}</div>
          )}
        </div>
      </td>
      <td className={styles.deleteColumn}>
        <button className={styles.button} onClick={rowDeleteHandler}>
          <DeleteIcon />
        </button>
      </td>
      <td className={styles.editColumn} onClick={rowEditHandler}>
        <button className={styles.button}>
          <EditIcon />
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
