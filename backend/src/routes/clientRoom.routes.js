import { Router } from "express";
import { createRoom } from "../services/roomService.js";

const router = Router();

//create room for client
router.post("/rooms", createRoom);
