import { generateUniqueRoomName } from "../utils/generateUniqueNames.js";
const createRoom = (req, res) => {
  try {
    console.log("called ---_>");
    const roomName = generateUniqueRoomName();
    console.log("room anme", roomName);

    return res.status(200).json({ data: roomName, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export { createRoom };
