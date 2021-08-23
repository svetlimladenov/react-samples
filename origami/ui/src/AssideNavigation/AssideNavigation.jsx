import React from "react";
import styles from "./AssideNavigation.module.css";
import Link from "../shared/Link/Link";

function AssideNavigation() {
  return (
    <aside className={styles.Aside}>
      <ul>
        <Link url="#">Link 1</Link>
        <Link url="#">Link 2</Link>
        <Link url="#">Link 3</Link>
        <Link url="#">Link 4</Link>
      </ul>
    </aside>
  );
}

export default AssideNavigation;
