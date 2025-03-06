import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

export const getUsers = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const users = userService.getAllUsers();
        res.json({ data: users });
    } catch (error) {
        next(error);
    }
};

export const getUserById = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const id = Number(req.params.id);
        const user = userService.getUserById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ data: user });
        }
    } catch (error) {
        next(error);
    }
};
