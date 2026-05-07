import { rooms } from "../services/roomService.js";
import { createRoom } from "../services/roomService.js";
import { joinRoom } from "../services/roomService.js";

export const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`Connected socket id ${socket.id}`);

    socket.on("create-instant-meet", () => {
      const roomName = createRoom(socket);

      socket.join(roomName);

      socket.emit("room-created", roomName);
    });

    socket.on("join-room", (roomId) => {
      const room = rooms.get(roomId);

      if (!room) {
        socket.emit("error", "Room does not exist");
        return;
      }

      const { existingUsers } = joinRoom(socket, roomId);

      socket.emit("existing-users", existingUsers);

      socket.to(roomId).emit("user-joined", socket.id);
    });
  });
};
