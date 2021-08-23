import React from "react";
import styles from "./styles.module.css";
import Link from "../shared/Link/Link";
import logo from "../assets/white-origami-bird.png";

function Navigation() {
  return (
    <nav className={styles.Navigation} style={{ position: "fixed" }}>
      <ul>
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <Link url="#">Link 1</Link>
        <Link url="#">Link 2</Link>
        <Link url="#">Link 3</Link>
        <Link url="#">Link 4</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
