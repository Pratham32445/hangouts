import type { Request, Response } from "express";
import { signUpSchema } from "types";
import { prismaClient } from "db"
import bcrypt from "bcryptjs";

export async function signUp(req: Request, res: Response) {
    const parsedBody = signUpSchema.safeParse(req.body);
    if (!parsedBody.success) {
        res.status(411).json({
            message: "Invalid inputs",
            errors: parsedBody.error
        })
        return;
    }
    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedBody.data.email
        }
    })
    if (user) {
        res.status(401).json({
            message: "User already exist"
        })
        return;
    }
    const hashPassword = await bcrypt.hash(parsedBody.data.password!, 10);
    await prismaClient.user.create({
        data: {
            email: parsedBody.data.email,
            password: hashPassword,
            name: parsedBody.data.name || ""
        }
    })
    res.status(201).json({
        message: "success"
    })
    return ;
}
