import Activity from '../models/Activity.js';

export const getActivity = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getActivityBySlug = async (req, res) => {
  try {
    const activity = await Activity.findOne({
      slug: req.param.slug,
    });
    res.json(activity);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

export const createActivity = async (req, res) => {
  const activity = new Activity(req.body);
  try {
    const insertedActivity = await activity.save();
    res.status(201).json(insertedActivity);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
