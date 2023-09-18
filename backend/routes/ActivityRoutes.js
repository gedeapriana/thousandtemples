import express from 'express';

import {
  getActivity,
  createActivity,
  getActivityBySlug,
} from '../controllers/ActivityController.js';

const router = express.Router();

router.get('/activities', getActivity);
router.get('/activities/:slug', getActivityBySlug);
router.post('/activities', createActivity);

export default router;
