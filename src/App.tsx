import React from "react";
import styles from "./App.module.scss";
import { ReactComponent as ImageSample } from "./assets/image.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={styles.App}>
        <div className={styles.container}>
          <h1 className={styles.container__title}>Upload your image</h1>
          <p className={styles.container__subtitle}>File should be Jpeg, Png,...</p>
          <div className={styles.dropContainer}>
            <ImageSample className={styles.dropContainer__img} />
            <h2 className={styles.dropContainer__txt}>Drag & Drop your image here</h2>
          </div>
          <p className={styles.dropContainer__txt}>Or</p>
          <button className={styles.uploadButton}>Choose a file</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
