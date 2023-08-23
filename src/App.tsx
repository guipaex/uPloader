import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Share from "./components/Share";
import Uploader from "./components/Uploader";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [, setURL] = useState("");
  const [status, setStatus] = useState("waiting");

  const getURL = (childdata: any) => {
    setData(childdata);
  };

  useEffect(() => {
    setURL(data);
    if (data) {
      setStatus("loading");
      setTimeout(() => {
        setStatus("done");
      }, 1500);
    } else {
      setStatus("waiting");
    }
  }, [data]);

  return (
    <>
      <div className={styles.App}>
        {status === "waiting" && <Uploader getURL={getURL} />}
        {status === "loading" && <Loading />}
        {status === "done" && <Share data={data} />}
      </div>
      <Footer />
    </>
  );
}
