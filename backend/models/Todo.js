import mongoose from "mongoose";

const Todo = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    require: false,
  },
});

export default mongoose.model("Todos", Todo);
