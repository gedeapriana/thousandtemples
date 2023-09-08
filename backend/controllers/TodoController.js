import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTodoBySlug = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      slug: req.params.slug,
    });
    res.json(todo);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    const insetTodo = await todo.save();
    res.status(201).json(insetTodo);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
