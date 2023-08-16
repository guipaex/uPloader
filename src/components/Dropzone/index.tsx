import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Axios from "axios";
import styles from "./Dropzone.module.scss";
import { ReactComponent as ImageSample } from "../../assets/image.svg";

export default function Dropzone() {
  const [image, setImage] = useState<any>("");

  const imgUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "guipaex");
    let data = "";

    await Axios.post("https://api.cloudinary.com/v1_1/guipaex/image/upload", formData).then((response) => {
      data = response.data["secure_url"];
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
    // Do something with the files
    let img = acceptedFiles[0];
    imgSubmit(img);
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
        <div>
          {image ? (
            <div>
              <img src={image} className={styles.container__preview} alt={image.name} />
            </div>
          ) : (
            <div className={styles.container__drop}>
              <ImageSample className={styles.container__img} />
              <h2 className={styles.container__txt}>Drag & Drop your image here</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
