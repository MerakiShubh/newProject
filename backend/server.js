import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import { Socket } from "socket.io";

dotenv.config();
const app = express();

const frontendUrl = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: `${frontendUrl}`,
  }),
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: `${frontendUrl}`,
  },
});

app.get("/health", (req, res) => {
  res.send("Everyting is fine!!");
});

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log(`Connected socket id ${socket.id}`);

  socket.on("join-room", (roomName) => {
    socket.join(roomName);

    console.log(`${socket.id} joined room ${roomName}`);

    socket.to(roomName).emit("user-joined", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
