import mongoose from "mongoose";

const Category = mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  slug: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  }
});

export default mongoose.model('Categories', Category);
