import mongoose from "mongoose";

const Destination = mongoose.Schema({
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
  },
  category: {
    require: true,
    type: String,
  },
  location: {
    require: true,
    type: String,
  },
  likeCount: {
    require: true,
    type: Number,
  },
  viewCount: {
    require: true,
    type: Number,
  },
  map: {
    require: true,
    type: Array,
  },
  price: {
    require: false,
    type: Number,
  }
});

export default mongoose.model('Destinations', Destination);

