import express from "express";
import {
  getTodos,
  getTodoBySlug,
  createTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:slug", getTodoBySlug);
router.post("/todos", createTodo);

export default router;
