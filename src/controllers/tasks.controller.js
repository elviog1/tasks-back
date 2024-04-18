import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();

    res.json(savedTask);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Not found task" });
    res.json(task);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
export const updateTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Not found task" });
    res.json(task);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Not found task" });
    return res.sendStatus(204);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
