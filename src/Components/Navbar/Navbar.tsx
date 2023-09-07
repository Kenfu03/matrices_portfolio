import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h1>Matices</h1>
      <ul className={styles.navbarOptions}>
        <li className={styles.option}>
          <Link href="/acerca">Acerca</Link>
        </li>
        <li className={styles.option}>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};
