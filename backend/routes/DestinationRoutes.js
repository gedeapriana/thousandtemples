import express from "express";
import {
  getDestinations,
  getDestinationBySlug,
  createDestination,
} from "../controllers/DestinationController.js";

const router = express.Router();

router.get("/destinations", getDestinations);
router.get("/destinations/:slug", getDestinationBySlug);
router.post("/destinations", createDestination);

export default router;
