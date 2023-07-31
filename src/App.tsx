import React from "react";
import styles from "./App.module.scss";
import { ReactComponent as ImageSample } from "./assets/image.svg";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.subtitle}>File should be Jpeg, Png,...</p>
        <div className={styles.uploader}>
          <ImageSample />
          <h2 className={styles.subtitle}>Drag & Drop your image here</h2>
        </div>
        <button className={styles.uploadButton}>Choose a file</button>
      </div>
      <footer>Created by @guipaex - devChallenges.io</footer>
    </div>
  );
}

export default App;
