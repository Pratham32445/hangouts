import express from "express"
import { createRoom } from "../controllers/Rooms.controller";

export const roomRouter = express.Router();

roomRouter.post("/create-room",createRoom);