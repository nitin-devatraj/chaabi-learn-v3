import React, { useState } from "react";
import styles from "./Table.module.scss";
import TableRow from "./TableRow/TableRow";
import TableRowHeader from "./TableRowHeader/TableRowHeader";

function Table({ columnNames, tableRows }) {
  const [rows, setRows] = useState(tableRows);

  // pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPageIndex = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleRows = rows.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPageIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const tableRowDeleteHandler = (id) => {
    console.log(id);
    setRows(rows.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>table heading</div>
      <table className={styles.table}>
        <thead>
          <TableRowHeader columnNames={columnNames} />
        </thead>
        <tbody>
          {visibleRows.map((item) => (
            <TableRow
              item={item}
              key={item.id}
              onDelete={tableRowDeleteHandler}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.footer}>
        Page {currentPage} of {lastPageIndex}{" "}
        <div className={styles.paginationBtnContainer}>
          <button
            className={styles.paginationBtn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={styles.paginationBtn}
            onClick={handleNextPage}
            disabled={currentPage === lastPageIndex}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
