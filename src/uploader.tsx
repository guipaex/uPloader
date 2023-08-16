import React, { useState } from "react";
import Axios from "axios";
import AvatarUpload from "./imageUpload";

const App = (props: any) => {
  const [logo, setLogo] = useState<any>("");
  const [, setImg] = useState<any>({});

  const handleImg = (e: any) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setLogo(e.target.files[0]);
    }
  };

  const profileUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "guipaex");
    let data = "";

    await Axios.post("https://api.cloudinary.com/v1_1/guipaex/image/upload", formData).then((response) => {
      data = response.data["secure_url"];
    });
    return data;
  };

  const handleSubmit = async (e: any) => {
    try {
      await profileUpload(logo);
      alert("imagem subida");
      setLogo("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AvatarUpload imageUpload={handleImg} image={logo} />
      <button type='submit' onClick={(e) => handleSubmit(e)}>
        Botão do submit
      </button>
    </>
  );
};

export default App;
