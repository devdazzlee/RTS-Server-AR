import { Router } from "express";
import * as userController from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);

export default router;
        