import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "../App.css";
import { logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <div className={`${styles.imageContainer}`}>
            <img src={logo} alt="Logo" className="w-[50px]" />
          </div>
          <h2 className={`${styles.logoTitle}`}>Kutte Ai</h2>
        </div>

        <button className={`${styles.navBtn}`}>Connect wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
