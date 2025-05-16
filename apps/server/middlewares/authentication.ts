import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export function authentication(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(404).json({
            message: "token not found"
        })
        return;
    }
    const data = jwt.verify(token, process.env.JWT_PASSWORD!) as { id: string };
    req.userId = data.id;
    next();
}