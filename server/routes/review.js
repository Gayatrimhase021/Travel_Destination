import express from "express";

import {
  createReview,
  getTourReviews
} from "../controllers/review.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createReview);

router.get("/tour/:tourId", getTourReviews);

export default router;