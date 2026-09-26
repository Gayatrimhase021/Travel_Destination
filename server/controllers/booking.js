import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      tour,
      travelDate,
      guests,
      totalAmount
    } = req.body;

    if (!tour || !travelDate || !guests || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    const booking = await Booking.create({
      user: req.user.id,
      tour,
      travelDate,
      guests,
      totalAmount
    });

    const createdBooking = await Booking.findById(
      booking._id
    )
      .populate("tour", "title image duration price")
      .populate("user", "name email");

    res.status(201).json({
      success: true,
      message: "Tour booked successfully",
      booking: createdBooking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id
    })
      .populate("tour", "title image duration price")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};