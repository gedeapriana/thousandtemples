import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDestinationBySlug = async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    res.json(destination);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDestination = async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const insertDestination = await destination.save();
    res.status(201).json(insertDestination);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
