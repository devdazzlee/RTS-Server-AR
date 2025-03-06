import { Request, Response, NextFunction } from "express";

export interface ApiError extends Error {
    statusCode?: number;
}

export const errorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction): void => {
    const status = err.statusCode || 500;
    res.status(status).json({
        status,
        message: err.message || "Internal Server Error"
    });
};
