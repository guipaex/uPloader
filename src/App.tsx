import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Share from "./components/Share";
import Uploader from "./components/Uploader";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  const getURL = (childdata: any) => {
    setData(childdata);
    console.log(childdata);
  };

  function render(params: any) {
    switch (params) {
      case "x":
        <Uploader getURL={getURL} />;
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className={styles.App}>
        {<Uploader getURL={getURL} />}
        {/* <Loading /> */}
        {/* <Share setURL={url} /> */}
      </div>
      <Footer />
    </>
  );
}
