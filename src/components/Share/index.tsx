import styles from "./Share.module.scss";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";

export default function Share({ data }: any) {
  const [url] = useState<string>(data ? data : "https://www.euax.com.br/wp-content/uploads/2019/10/Teste.png");

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <MdCheckCircle className={styles.container__icon} />
        Upload Succesfully!
      </h1>
      <img src={url} className={styles.preview} alt='Uploaded'></img>
      <div className={styles.imgLink}>
        <p className={styles.imgLink__link}>{url}</p>
        <button className={styles.imgLink__btn}>Copy link</button>
      </div>
    </div>
  );
}
