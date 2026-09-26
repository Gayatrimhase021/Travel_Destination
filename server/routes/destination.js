import express from "express";

import {
  getAllDestinations,
  getDestinationById,
  postDestination
} from "../controllers/destination.js";

const router = express.Router();

router.get("/", getAllDestinations);

router.get("/:id", getDestinationById);

router.post("/", postDestination);

export default router;