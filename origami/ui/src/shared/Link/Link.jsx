import React from "react";
import styles from "./Link.module.css";

function Link({ children, url }) {
  return (
    <li className={styles.listItem}>
      <a href={url}>{children}</a>
    </li>
  );
}

export default Link;
