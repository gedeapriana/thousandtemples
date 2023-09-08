import mongoose from "mongoose";

const Destination = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    require: false,
  },
  subdistrict: {
    type: String,
    require: false,
  },
  regency: {
    type: String,
    require: false,
  },
  coordinates: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Destinations", Destination);
