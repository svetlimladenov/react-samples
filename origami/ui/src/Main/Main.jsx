import React from "react";
import styles from "./styles.module.css";

function Main({ title, children }) {
  return (
    <main className={styles.Main}>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export default Main;
