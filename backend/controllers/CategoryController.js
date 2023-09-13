import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const datas = await Category.find();
    res.json(datas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export const createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const insertedCategory = await category.save();
    res.status(201).json(insertedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const getCategoryBySlug = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.updateOne({ slug: req.params.slug }, { $set: req.body });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.deleteOne({ slug: req.params.slug });
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

