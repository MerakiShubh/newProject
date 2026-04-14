import { generateUniqueRoomName } from "../utils/generateUniqueNames.js";
const createRoom = (req, res) => {
  try {
    const roomName = generateUniqueRoomName();

    return res.status(200).json({ data: roomName, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};
