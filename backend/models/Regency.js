import mongoose from "mongoose";

const Regency = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Regencies", Regency);
