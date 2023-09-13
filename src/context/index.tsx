import { createContext, useState } from "react";

export type ImageProps = {
  stat: string;
  url: string;
};

type StatusContextProps = {
  status: ImageProps;
  handleStatus: (image: ImageProps) => void;
};

const StatusContext = createContext<StatusContextProps>({} as StatusContextProps);

const StatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<ImageProps>({ stat: "waiting", url: "null" });

  const handleStatus = (image: ImageProps) => {
    setStatus(image);
    console.log(image);
  };
  return (
    <StatusContext.Provider
      value={{
        status,
        handleStatus,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export { StatusProvider, StatusContext };
