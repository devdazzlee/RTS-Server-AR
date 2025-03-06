import { Request, Response, NextFunction } from "express";
import * as authServices from "../services/auth.service";

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await authServices.signUp(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ success: false, message: errorMessage });
    }
};