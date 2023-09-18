import mongoose from 'mongoose';

const Activity = mongoose.Schema({
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
  likeCount: {
    require: true,
    type: Number,
  },
  viewCount: {
    require: true,
    type: Number,
  },
  createdAt: {
    require: true,
    type: Date,
  },
  updatedAt: {
    require: true,
    type: Date,
  },
});

export default mongoose.model('Activities', Activity);
