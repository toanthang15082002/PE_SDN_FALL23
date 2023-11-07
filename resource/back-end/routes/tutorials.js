import express from "express";
import tutorials from "../controllers/tutorials.js";
const tutorialRouter = express.Router();

tutorialRouter.get("/", tutorials.getAllTutorials);
tutorialRouter.get("/:id/comments", tutorials.getCommentByTutorial);
tutorialRouter.post("/create", tutorials.createTutorial);

export default tutorialRouter;