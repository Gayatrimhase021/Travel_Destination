import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true
    },

    image: {
      type: String,
      required: true
    },

    duration: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    highlights: {
      type: [String],
      default: []
    },

    inclusions: {
      type: [String],
      default: []
    },

    exclusions: {
      type: [String],
      default: []
    },

    available: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;