import styles from "./Uploader.module.scss";
import { useDropzone } from "react-dropzone";
import Axios from "axios";
import React, { useCallback, useState } from "react";
import { ReactComponent as ImageSample } from "../../assets/image.svg";

export default function Uploader({ getURL }: any) {
  const [image, setImage] = useState<any>("");

  const imgUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "guipaex");
    let data = "";

    await Axios.post("https://api.cloudinary.com/v1_1/guipaex/image/upload", formData).then((response) => {
      data = response.data["secure_url"];
      getURL(data);
    });
    return data;
  };

  const imgSubmit = async (e: any) => {
    try {
      setImage(await imgUpload(e));
    } catch (error) {
      console.error(error);
    }
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    let img = acceptedFiles[0];
    imgSubmit(img);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpg": [".jpg"],
    },
  });

  return (
    <div className={styles.container} {...getRootProps()}>
      <h1 className={styles.container__title}>Upload your image</h1>
      <p className={styles.container__subtitle}>File should be Jpeg, Png,...</p>
      <div className={styles.dropContainer}>
        {isDragActive ? (
          <div className={styles.dragActive}>
            <p className={styles.dragActive__txt}>Drop the files here...</p>
            <div className={styles.dragActive__background}></div>
          </div>
        ) : (
          <div>
            {image ? (
              <div>
                <img src={image} className={styles.container__preview} alt={image.name} />
              </div>
            ) : (
              <div className={styles.dropContainer__dropArea}>
                <ImageSample className={styles.dropContainer__img} />
                <h2 className={styles.dropContainer__txt}>Drag & Drop your image here</h2>
              </div>
            )}
          </div>
        )}
      </div>
      <p className={styles.dropContainer__txt}>Or</p>
      <label htmlFor='input-btn' className={styles.uploadButton}>
        Choose a file
      </label>
      <input id='input-btn' {...getInputProps()} type='file' hidden />
    </div>
  );
}
