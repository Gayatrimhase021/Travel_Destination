import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  try {
    const { tour, rating, comment } = req.body;

    if (!tour || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const review = await Review.create({
      user: req.user.id,
      tour,
      rating,
      comment
    });

    const createdReview = await Review.findById(review._id)
      .populate("user", "name")
      .populate("tour", "title");

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review: createdReview
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getTourReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      tour: req.params.tourId
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      reviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};