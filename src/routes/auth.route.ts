import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/signup", AuthController.signUp);
// POST /api/v1/auth/login

router.post('/login', AuthController.login);

// POST /api/v1/auth/refresh
router.post('/refresh', AuthController.refresh);

export default router;
