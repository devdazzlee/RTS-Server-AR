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

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await authServices.login(email, password);

        return res.status(200).json({
            success: true,
            data: { accessToken, refreshToken },
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: (error as Error).message || 'Authentication failed',
        });
    }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(400).json({ success: false, message: 'Missing refresh token' });
        }

        const { accessToken } = await authServices.refreshAccessToken(refreshToken);

        return res.status(200).json({
            success: true,
            data: { accessToken },
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: (error as Error).message || 'Invalid refresh token',
        });
    }
};
