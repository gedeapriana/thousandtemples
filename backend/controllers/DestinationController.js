import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  try {
    const datas = await Destination.find();
    res.json(datas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const createDestination = async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const insertedDestination = await destination.save();
    res.status(201).json(insertedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getDestinationBySlug = async (req, res) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    res.json(destination);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.updateOne({ slug: req.params.slug }, { $set: req.body });
    res.status(200).json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteDestination = async (req, res) => {
  try {
    const deletedDestination = await Destination.deleteOne({ slug: req.params.slug });
    res.status(200).json(deletedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

