import React, { useReducer } from "react";
import styles from "./Navbar.module.scss";
import HomeIcon from "./NavBarIcons/HomeIcon/HomeIcon";

const selectedBtnreducer = (prevState, action) => {
  switch (action) {
    case action === "Home":
      return "Home";
    case action === "Explore":
      return "Explore";
    case action === "Search":
      return "Search";
    case action === "Support":
      return "Support";
    default:
      return action;
  }
};

function Navbar() {
  const [selectedBtn, dispatchSelectedBtn] = useReducer(
    selectedBtnreducer,
    "Home"
  );

  const buttonClickHandler = (event) => {
    dispatchSelectedBtn(event.target.id);
  };

  return (
    <nav className={styles.navBarContainer}>
      <button
        className={`${styles.navItem} ${
          selectedBtn === "Home" ? styles.selected : undefined
        }`}
        onClick={buttonClickHandler}
        id="Home"
      >
        <HomeIcon fillColor={selectedBtn === "Home" ? "#303134" : "#75777A"} />
        Home
      </button>

      <button
        className={`${styles.navItem} ${
          selectedBtn === "Explore" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Explore"
      >
        <HomeIcon
          fillColor={selectedBtn === "Explore" ? "#303134" : "#75777A"}
        />
        Explore
      </button>

      <button
        className={`${styles.navItem} ${
          selectedBtn === "Search" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Search"
      >
        <HomeIcon
          fillColor={selectedBtn === "Search" ? "#303134" : "#75777A"}
        />
        Search
      </button>

      <button
        className={`${styles.navItem} ${
          selectedBtn === "Support" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Support"
      >
        <HomeIcon
          fillColor={selectedBtn === "Support" ? "#303134" : "#75777A"}
        />
        Support
      </button>
    </nav>
  );
}

export default Navbar;
