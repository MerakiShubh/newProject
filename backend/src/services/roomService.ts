import { generateUniqueRoomName } from "../utils/generateUniqueNames.js";
export const rooms = new Map();

export const createRoom = (socket) => {
  const roomName = generateUniqueRoomName();

  const room = {
    id: roomName,
    peers: new Map(),
  };

  rooms.set(roomName, room);

  room.peers.set(socket.id);

  return roomName;
};

export const joinRoom = (socket, roomId) => {
  const room = rooms.get(roomId);

  if (!room) return null;

  socket.join(roomId);

  const existingUsers = Array.from(room.peers);

  room.peers.set(socket.id);

  return { existingUsers };
};
