import React from "react";
import styles from "./SearchInput.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/component-icons/search-input/search-icon.svg";

function SearchInput({ placeholder, required, disabled }) {
  return (
    <div className={styles.searchInputContainer}>
      <SearchIcon />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default SearchInput;
