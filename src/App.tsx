import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Share from "./components/Share";
import Uploader from "./components/Uploader";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [, setURL] = useState("");

  const getURL = (childdata: any) => {
    setData(childdata);
  };

  useEffect(() => {
    setURL(data);
    <Loading />;
  }, [data]);

  return (
    <>
      <div className={styles.App}> {data ? <Share data={data} /> : <Uploader getURL={getURL} />}</div>
      <Footer />
    </>
  );
}
