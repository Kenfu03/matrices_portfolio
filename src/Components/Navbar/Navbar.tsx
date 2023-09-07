import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h1>Matices</h1>
      <ul className={styles.navbarOptions}>
        <li>
          <Link href="/acerca">Acerca</Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
          <div className={styles.line}></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
