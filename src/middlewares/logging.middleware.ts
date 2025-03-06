import { Request, Response, NextFunction } from "express";
import { log } from "../utils/logger";

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    log(`${req.method} ${req.url}`);
    next();
};
