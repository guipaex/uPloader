import { createRef, useState } from "react";

const AvatarUpload = (props: any) => {
  const [image, setImage] = useState<any>();
  const inputFileRef: any = createRef();
  const cleanup = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };
  const defImage = (newImage: any) => {
    if (image) {
      cleanup();
    }
    setImage(newImage);
  };
  const handleOnChange = (event: any) => {
    const newImage = event.target.files[0];
    if (newImage) {
      defImage(URL.createObjectURL(newImage));
    }
    props.imageUpload(event);
    cleanup();
  };

  return (
    <div style={{ display: "block" }}>
      <div>
        <img src={image} style={{ width: "100px", height: "100px" }} alt={image.name} />
      </div>
      <input
        ref={inputFileRef}
        accept='image/*'
        id='avatar-image-upload'
        type='file'
        onChange={handleOnChange}
        src={image}
      />
    </div>
  );
};

export default AvatarUpload;
