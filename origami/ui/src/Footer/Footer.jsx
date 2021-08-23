import React from "react";
import Link from "../shared/Link/Link";
import styles from "./styles.module.css";
import logo from "../assets/blue-origami-bird-flipped.png";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul>
        <Link>Test Link</Link>
        <Link>Test Link</Link>
        <Link>Test Link</Link>
        <Link>Test Link</Link>
        <Link>
          <img src={logo} alt="logo" />
        </Link>
      </ul>
      <p>Copyright 2021</p>
    </footer>
  );
}
