import styles from "./Share.module.scss";
import { MdCheckCircle, MdCopyAll } from "react-icons/md";
import { useState } from "react";

export default function Share(props: any) {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <MdCheckCircle className={styles.container__icon} />
        Upload Succesfully!
      </h1>
      <img className={styles.preview}></img>
      <div className={styles.imgLink}>
        <p className={styles.imgLink__link}></p>
        <button className={styles.imgLink__btn}>Copy link</button>
      </div>
    </div>
  );
}
