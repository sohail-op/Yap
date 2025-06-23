import express from "express";
import validateToken from "../middleware/validateTokenHandler.js";
import { getUsersForSidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/getUsersForSidebar", validateToken, getUsersForSidebar);

export default router;
