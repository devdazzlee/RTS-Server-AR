import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";

const router = Router();

router.get("/signup", AuthController.signUp);

export default router;
