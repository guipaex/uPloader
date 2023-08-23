import styles from "./Uploader.module.scss";
import Dropzone from "../Dropzone";

export default function Uploader({ getURL }: any) {
  const data = "Tá subindo";
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Upload your image</h1>
      <p className={styles.container__subtitle}>File should be Jpeg, Png,...</p>
      <Dropzone />
      <p className={styles.dropContainer__txt}>Or</p>
      <button
        className={styles.uploadButton}
        onClick={() => {
          getURL(data);
          const inputButton = document.querySelector<HTMLInputElement>(".input-btn");
          if (inputButton) {
            inputButton.click();
          }
        }}
      >
        {" "}
        Choose a file
        <input type='file' accept='image/png, image/jpg, image/jpeg' hidden className='input-btn' />
      </button>
    </div>
  );
}
