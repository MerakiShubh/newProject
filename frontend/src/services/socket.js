import { Manager } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL;
const manager = new Manager(SOCKET_URL, {
  autoConnect: false,
  reconnectionDelayMax: 10000,
});

export const socket = manager.socket("/", {
  // auth: {
  //   token: "123"
  // }
});

socket.on("connect", () => {
  console.log("Socket connectd: ", socket.id);
  socket.emit("join-room", "room1");
});

socket.on("disconnect", (reason) => {
  console.log("Disconnected: ", reason);
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err.message);
});

socket.on("user-joined", (id) => {
  console.log("new user joined", id);
});

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};
