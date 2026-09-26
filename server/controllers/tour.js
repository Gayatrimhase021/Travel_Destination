import Tour from "../models/Tour.js";

export const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find()
      .populate("destination", "name location")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      tours
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate(
      "destination",
      "name location image"
    );

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    res.json({
      success: true,
      tour
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const postTour = async (req, res) => {
  try {
    const {
      title,
      destination,
      image,
      duration,
      price,
      category,
      description,
      highlights,
      inclusions,
      exclusions,
      available
    } = req.body;

    if (
      !title ||
      !destination ||
      !image ||
      !duration ||
      !price ||
      !category ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    const tour = await Tour.create({
      title,
      destination,
      image,
      duration,
      price,
      category,
      description,
      highlights,
      inclusions,
      exclusions,
      available
    });

    const createdTour = await Tour.findById(tour._id).populate(
      "destination",
      "name location"
    );

    res.status(201).json({
      success: true,
      message: "Tour created successfully",
      tour: createdTour
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};