import express from "express"
import { createRoom, deleteRoom, getRoom } from "../controllers/Rooms.controller";
import { authentication } from "../middlewares/authentication";

export const roomRouter = express.Router();

roomRouter.post("/create-room",authentication,createRoom);
roomRouter.delete("/delete-room/:id",authentication,deleteRoom);
roomRouter.post("/get-room/:id",getRoom);