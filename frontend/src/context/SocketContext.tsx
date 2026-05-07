import { createContext, useContext, useEffect } from "react";
import { socket, connectSocket, disconnectSocket } from "../services/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  useEffect(() => {
    console.log("socket connection called ---->");
    connectSocket();

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
