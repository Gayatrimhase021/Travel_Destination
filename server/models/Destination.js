import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    image: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      default: 0
    },

    reviews: {
      type: Number,
      default: 0
    },

    price: {
      type: Number,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    bestTime: {
      type: String,
      required: true
    },

    placesToVisit: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Destination = mongoose.model(
  "Destination",
  destinationSchema
);

export default Destination;