import express from "express";
import http from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import { initSocket } from "./src/socket/index.js";
import { config } from "./src/config/config.js";
const app = express();

// const frontendUrl = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: config.get("frontendUrl"),
  }),
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: config.get("frontendUrl"),
  },
});

initSocket(io);

app.get("/health", (req, res) => {
  res.send("Everyting is fine!!");
});

const PORT = config.get("port");

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { io, app };
