import styles from "./Uploader.module.scss";
import Dropzone from "../Dropzone";

export default function Uploader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Upload your image</h1>
      <p className={styles.container__subtitle}>File should be Jpeg, Png,...</p>
      <Dropzone />
      <p className={styles.dropContainer__txt}>Or</p>
      <button
        className={styles.uploadButton}
        onClick={() => {
          const inputElement = document.querySelector<HTMLInputElement>(".input-btn");
          if (inputElement) {
            inputElement.click();
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
