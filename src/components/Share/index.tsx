import styles from "./Share.module.scss";
import { MdCheckCircle } from "react-icons/md";
import { useState } from "react";
import SnackBar from "../SnackBar";

interface ShareProps {
  data: string;
}

export default function Share({ data }: ShareProps) {
  const [url] = useState<string>(data ? data : "https://www.euax.com.br/wp-content/uploads/2019/10/Teste.png");
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
      <img src={url} className={styles.preview} alt='Uploaded'></img>
      <SnackBar status={snackView}>
        Link copied to clipboard!
        <MdCheckCircle />
      </SnackBar>
      <div className={styles.imgLink} onClick={() => copyLink(url)}>
        <p className={styles.imgLink__link}>{url}</p>
        <button className={styles.imgLink__btn}>Copy link</button>
      </div>
    </div>
  );
}
