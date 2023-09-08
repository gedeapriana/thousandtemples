import mongoose from "mongoose";

const Subdistrict = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    require: true,
  },
  regency_id: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("Subdistricts", Subdistrict);
