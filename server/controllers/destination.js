import Destination from "../models/Destination.js";

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({
      createdAt: -1
    });

    res.json({
      success: true,
      destinations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found"
      });
    }

    res.json({
      success: true,
      destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const postDestination = async (req, res) => {
  try {
    const {
      name,
      location,
      category,
      image,
      rating,
      reviews,
      price,
      description,
      bestTime,
      placesToVisit
    } = req.body;

    if (
      !name ||
      !location ||
      !category ||
      !image ||
      !price ||
      !description ||
      !bestTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    const destination = await Destination.create({
      name,
      location,
      category,
      image,
      rating,
      reviews,
      price,
      description,
      bestTime,
      placesToVisit
    });

    res.status(201).json({
      success: true,
      message: "Destination created successfully",
      destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};