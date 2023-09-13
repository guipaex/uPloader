import styles from "./Share.module.scss";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import SnackBar from "../SnackBar";

type Link = {
  url: string;
};

export default function Share(link: Link) {
  const [snackView, setSnackView] = useState(false);
  function copyLink(link: string) {
    navigator.clipboard.writeText(link);
    setSnackView(true);
    setTimeout(() => {
      setSnackView(false);
    }, 3000);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <MdCheckCircle className={styles.container__icon} />
        Upload Succesfully!
      </h1>
      <img src={link.url} className={styles.preview} alt='Uploaded'></img>
      <SnackBar status={snackView}>
        Link copied to clipboard!
        <MdCheckCircle />
      </SnackBar>
      <div className={styles.imgLink} onClick={() => copyLink(link.url)}>
        <p className={styles.imgLink__link}>{link.url}</p>
        <button className={styles.imgLink__btn}>Copy link</button>
      </div>
    </div>
  );
}
