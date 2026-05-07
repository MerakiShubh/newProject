import { Router } from "express";
import { createRoom } from "../controllers/clientRoom.controller.js";
const router = Router();

//create room for client
router.post("/create", createRoom);

export default router;
