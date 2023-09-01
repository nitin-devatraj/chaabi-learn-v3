import React from "react";
import styles from "./TableRowHeader.module.scss";

function TableRowHeader({ columnNames }) {
  return (
    <tr className={styles.tableRowHeader}>
      <th className={styles.nameColumnHeader}>{columnNames[0]}</th>
      <th className={styles.statusColumnHeader}>{columnNames[1]}</th>
      <th className={styles.roleColumnHeader}>{columnNames[2]}</th>
      <th className={styles.emailColumnHeader}>{columnNames[3]}</th>
      <th className={styles.teamsColumnHeader}>{columnNames[4]}</th>
      <th className={styles.deleteColumnHeader}></th>
      <th className={styles.editColumnHeader}></th>
    </tr>
  );
}

export default TableRowHeader;
