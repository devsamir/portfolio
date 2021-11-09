import React from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <Image src="/logo.png" height={62} width={93} />
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li>
            <a href="#home" className={styles.mainNavLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#education" className={styles.mainNavLink}>
              Education
            </a>
          </li>
          <li>
            <a href="#" className={styles.mainNavLink}>
              Skill
            </a>
          </li>
          <li>
            <a href="#" className={styles.mainNavLink}>
              Project
            </a>
          </li>
          <li>
            <a href="#" className={styles.mainNavLink}>
              Certificate
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
