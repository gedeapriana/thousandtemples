import Subdistrict from "../models/Subdistrict.js";

export const getSubdistricts = async (req, res) => {
  try {
    const subdistrict = await Subdistrict.find();
    res.json(subdistrict);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getSubdistrictBySlug = async (req, res) => {
  try {
    const subdistrict = await Subdistrict.findOne({ slug: req.params.slug });
    res.json(subdistrict);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createSubdistrict = async (req, res) => {
  const subdistrict = new Subdistrict(req.body);
  try {
    const insertSubdistrict = await subdistrict.save();
    res.status(201).json(insertSubdistrict);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
