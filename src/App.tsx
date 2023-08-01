import React from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Uploader from "./components/Uploader";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Uploader />
      </div>
      <Footer />
    </>
  );
}

export default App;
