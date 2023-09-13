import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Share from "./components/Share";
import Uploader from "./components/Uploader";
import { useState, useEffect, useContext } from "react";
import { StatusContext } from "./context";

export default function App() {
  const [data, setData] = useState("");
  const [, setURL] = useState("");
  //const [status, setStatus] = useState("waiting");

  const getURL = (childdata: string) => {
    setData(childdata);
  };

  // useEffect(() => {
  //   setURL(data);
  //   if (data) {
  //     setStatus("loading");
  //     setTimeout(() => {
  //       setStatus("done");
  //     }, 1500);
  //   } else {
  //     setStatus("waiting");
  //   }
  // }, [data]);

  const { status } = useContext(StatusContext);

  return (
    <>
      <div className={styles.App}>
        <h1>{status?.stat}</h1>
        {status.stat === "waiting" && <Uploader />}
        {status.stat === "loading" && <Loading />}
        {status.stat === "uploaded" && <Share data={status.url} />}
      </div>
      <Footer />
    </>
  );
}
