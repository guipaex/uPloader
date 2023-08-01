import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.scss";
import { ReactComponent as ImageSample } from "../../assets/image.svg";

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
  });

  return (
    <div className={styles.container} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className={styles.dragActive}>
          <p className={styles.dragActive__txt}>Drop the files here...</p>
          <div className={styles.dragActive__background}></div>
        </div>
      ) : (
        <>
          <ImageSample className={styles.container__img} />
          <h2 className={styles.container__txt}>Drag & Drop your image here</h2>
        </>
      )}
    </div>
  );
}
