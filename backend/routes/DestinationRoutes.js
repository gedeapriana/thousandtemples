import express from "express";
import { getDestinations, getDestinationBySlug, createDestination, updateDestination, deleteDestination } from "../controllers/DestinationController.js";
const router = express.Router();

router.get('/destinations', getDestinations);
router.get('/destinations/:slug', getDestinationBySlug);
router.post('/destinations', createDestination);
router.patch('/destinations/:slug', updateDestination);
router.delete('/destinations/:slug', deleteDestination);

export default router;
