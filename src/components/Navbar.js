import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
const Navbar = () => (
  <header className={styles.navbar}>
    <div className={`${styles.navbar__title} ${styles.navbar__item}`}>
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        Posts
      </Link>
    </div>
    <div className={styles.navbar__item}>
      <Link to="/create" style={{ textDecoration: "none", color: "#fff" }}>
        Create Post
      </Link>
    </div>
    <div className={styles.navbar__item}>
      <Link to="/my" style={{ textDecoration: "none", color: "#fff" }}>
        My Posts
      </Link>
    </div>
    <div className={styles.navbar__item}>Contact</div>
  </header>
);

export default Navbar;
