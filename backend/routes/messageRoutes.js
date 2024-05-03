import express from "express";

import { getMessage, sendMessage } from "../controllers/messageController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/send/:id", validateToken, sendMessage);
router.get("/:id", validateToken, getMessage);

export default router;
