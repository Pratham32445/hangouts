import type { Request, Response } from "express";
import { prismaClient } from "db";
import { createRoomSchema } from "types";

export async function createRoom(req: Request, res: Response) {
    const parsedBody = createRoomSchema.safeParse(req.body);
    if (!parsedBody.success) {
        res.status(411).json({
            message: "Invaid Inputs",
            errors: parsedBody.error
        })
        return;
    }
    await prismaClient.room.create({
        data: {
            name: parsedBody.data.name
        }
    })
    res.status(201).json({
        message: "Room Created"
    })
}