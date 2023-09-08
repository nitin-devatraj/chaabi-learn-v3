import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import HomeIcon from "./NavBarIcons/HomeIcon/HomeIcon";

function Navbar() {
  const [selectedButton, setSelectedButton] = useState("Home");

  const buttonClickHandler = (event) => {
    setSelectedButton(event.target.id);
  };

  return (
    <nav className={styles.navBarContainer}>
      <button
        className={`${styles.navItem} ${
          selectedButton === "Home" ? styles.selected : undefined
        }`}
        onClick={buttonClickHandler}
        id="Home"
      >
        <HomeIcon
          fillColor={selectedButton === "Home" ? "#303134" : "#75777A"}
        />
        Home
      </button>

      <button
        className={`${styles.navItem} ${
          selectedButton === "Explore" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Explore"
      >
        <HomeIcon
          fillColor={selectedButton === "Explore" ? "#303134" : "#75777A"}
        />
        Explore
      </button>

      <button
        className={`${styles.navItem} ${
          selectedButton === "Search" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Search"
      >
        <HomeIcon
          fillColor={selectedButton === "Search" ? "#303134" : "#75777A"}
        />
        Search
      </button>

      <button
        className={`${styles.navItem} ${
          selectedButton === "Support" ? styles.selected : null
        }`}
        onClick={buttonClickHandler}
        id="Support"
      >
        <HomeIcon
          fillColor={selectedButton === "Support" ? "#303134" : "#75777A"}
        />
        Support
      </button>
    </nav>
  );
}

export default Navbar;
