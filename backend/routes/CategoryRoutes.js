import express from "express";
import { getCategories, getCategoryBySlug, createCategory, updateCategory, deleteCategory } from "../controllers/CategoryController.js";
const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:slug', getCategoryBySlug);
router.post('/categories', createCategory);
router.patch('/categories/:slug', updateCategory);
router.delete('/categories/:slug', deleteCategory);

export default router;
