import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Uploading...</h1>
      <div className={styles.loader}></div>
    </div>
  );
}
