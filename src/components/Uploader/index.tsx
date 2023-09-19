import styles from "./Uploader.module.scss";
import { useDropzone } from "react-dropzone";
import Axios from "axios";
import React, { ChangeEvent, useCallback, useContext } from "react";
import { ReactComponent as ImageSample } from "../../assets/image.svg";
import { StatusContext } from "../../context";

export default function Uploader() {
  const { handleStatus } = useContext(StatusContext);

  let imgStatus, imgURL: string;

  const imgUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "guipaex");
    let url: string = "";

    await Axios.post("https://api.cloudinary.com/v1_1/guipaex/image/upload", formData).then((response) => {
      url = response.data["secure_url"];
      imgURL = url;
      imgStatus = "Uploaded";
      handleStatus({ state: imgStatus, url: imgURL });
    });
  };

  const imgSubmit = async (file: File) => {
    try {
      imgStatus = "Uploading";
      imgURL = "";
      handleStatus({ state: imgStatus, url: "" });
      await imgUpload(file);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files;
    if (files) {
      let img = files[0];
      imgSubmit(img);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    let img = acceptedFiles[0];
    imgSubmit(img);
  }, []);

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Upload your image</h1>
      <p className={styles.container__subtitle}>File should be Jpeg, Png,...</p>
      <label className={styles.dropContainer} {...getRootProps()} htmlFor='input-btn'>
        {isDragActive ? (
          <div className={styles.dragActive}>
            <p className={styles.dragActive__txt}>Drop the files here...</p>
            <div className={styles.dragActive__background}></div>
          </div>
        ) : (
          <div className={styles.dropContainer__dropArea}>
            <ImageSample className={styles.dropContainer__img} />
            <h2 className={styles.dropContainer__txt}>Drag & Drop your image here</h2>
          </div>
        )}
      </label>
      <p className={styles.dropContainer__txt}>Or</p>
      <label htmlFor='input-btn' className={styles.uploadButton}>
        Choose a file
      </label>
      <input id='input-btn' onChange={handleImage} type='file' hidden />
    </div>
  );
}
