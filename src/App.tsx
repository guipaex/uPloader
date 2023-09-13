import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Share from "./components/Share";
import Uploader from "./components/Uploader";
import { useContext } from "react";
import { StatusContext } from "./context";

export default function App() {
  const { img } = useContext(StatusContext);

  return (
    <>
      <div className={styles.App}>
        {img.state === "Waiting" && <Uploader />}
        {img.state === "Uploading" && <Loading />}
        {img.state === "Uploaded" && <Share url={img.url} />}
      </div>
      <Footer />
    </>
  );
}
