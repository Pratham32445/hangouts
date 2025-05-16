import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6, "Password should be greater than 6 character").optional()
})