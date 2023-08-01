import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Created by{" "}
      <a className={styles.footer__link} href='https://github.com/guipaex' target='_blank'>
        @guipaex
      </a>{" "}
      - devChallenges.io
    </footer>
  );
}
