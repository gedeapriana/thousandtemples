import express from "express";
import {
  getSubdistricts,
  getSubdistrictBySlug,
  createSubdistrict,
} from "../controllers/SubdistrictController.js";

const router = express.Router();

router.get("/subdistricts", getSubdistricts);
router.get("/subdistricts/:slug", getSubdistrictBySlug);
router.post("/subdistricts", createSubdistrict);

export default router;
