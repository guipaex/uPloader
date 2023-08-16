import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Uploader from "./components/Uploader";

export default function App() {
  return (
    <>
      <div className={styles.App}>
        <Uploader />
      </div>
      <Footer />
    </>
  );
}
