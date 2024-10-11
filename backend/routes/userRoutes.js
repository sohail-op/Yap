import express from "express";
import validateToken from "../middleware/validateTokenHandler.js";
import { getUsersForSidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/", validateToken, getUsersForSidebar);
// router.get("/", validateToken, (req, res) => {
//   res.status(200).json("Working");
// });

export default router;
