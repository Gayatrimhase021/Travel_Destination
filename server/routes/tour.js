import express from "express";

import {
  getAllTours,
  getTourById,
  postTour
} from "../controllers/tour.js";

const router = express.Router();

router.get("/", getAllTours);

router.get("/:id", getTourById);

router.post("/", postTour);

export default router;