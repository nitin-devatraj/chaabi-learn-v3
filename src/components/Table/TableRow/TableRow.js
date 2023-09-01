import React, { useState } from "react";
import styles from "./TableRow.module.scss";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/table-icons/active-dot-icon.svg";
import { ReactComponent as InactiveIcon } from "../../../assets/icons/table-icons/inactive-dot-icon.svg";
import { ReactComponent as DraftIcon } from "../../../assets/icons/table-icons/draft-dot-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/table-icons/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/table-icons/edit-icon.svg";
import globalStyles from "../../../global-styles/styles.module.scss";
import ToggleButton from "../../Buttons/ToggleButton/ToggleButton";

function TableItem({ item, onDelete }) {
  const firstThreeBadges = item.teams.slice(0, 3);
  const remainingCount = item.teams.length - 3;
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [isNameEmpty, setIsNameEmpty] = useState(false);

  function rowDeleteHandler() {
    onDelete(item.id);
  }

  function rowEditHandler() {
    setIsEditing(true);
  }

  function handleNameChange(event) {
    setEditedName(event.target.value);
  }

  function handleInputKeyDown(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }

  function handleNameBlur() {
    if (editedName.trim() === "") {
      setIsNameEmpty(true);
      return;
    }

    setIsEditing(false);
    setIsNameEmpty(false);
  }

  return (
    <tr className={styles.tableItem}>
      <td className={styles.nameColumn}>
        <div>
          <ToggleButton />
          {isEditing ? (
            <div className={styles.name}>
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                onKeyDown={handleInputKeyDown}
              />
              {isNameEmpty && (
                <div
                  className={`${styles.requiredMessage} ${globalStyles.t5Lite}`}
                >
                  required
                </div>
              )}
            </div>
          ) : (
            editedName
          )}
        </div>
      </td>
      <td className={styles.statusColumn}>
        <div
          className={`${styles.badge}  ${
            item.status === "active"
              ? styles.activeBadge
              : item.status === "inactive"
              ? styles.inactiveBadge
              : styles.draftBadge
          }`}
        >
          {item.status === "active" ? (
            <ActiveIcon />
          ) : item.status === "inactive" ? (
            <InactiveIcon />
          ) : (
            <DraftIcon />
          )}

          {item.status}
        </div>
      </td>
      <td className={styles.roleColumn}>{item.role}</td>
      <td className={styles.emailColumn}>{item.email}</td>
      <td className={styles.teamsColumn}>
        <div className={styles.badges}>
          {firstThreeBadges.map((item, index) => (
            <div
              key={index}
              className={`${styles.badge} ${
                index === 0
                  ? styles.badgeGroup1
                  : index === 1
                  ? styles.badgeGroup2
                  : styles.badgeGroup5
              }`}
            >
              {item}
            </div>
          ))}
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
