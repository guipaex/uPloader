import { createContext, useState } from "react";

export type ImageProps = {
  state: string;
  url: string;
};

type StatusContextProps = {
  img: ImageProps;
  handleStatus: (img: ImageProps) => void;
};

const INITIAL_VALUE: ImageProps = {
  state: "Waiting",
  url: "null",
};

const StatusContext = createContext<StatusContextProps>({} as StatusContextProps);

const StatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [img, setIMG] = useState<ImageProps>(INITIAL_VALUE);

  function handleStatus(image: ImageProps) {
    setIMG(image);
  }
  return (
    <StatusContext.Provider
      value={{
        img,
        handleStatus,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export { StatusProvider, StatusContext };
