import axios from "../axios.js";

export const createRoom = async () => {
  const res = await axios.post("/room/create");
  return res.data;
};
