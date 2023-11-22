import User from '../models/UserModel.js';

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATED NEW USER
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const createuser = await user.save();
    res.status(201).json(createuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATED USER
export const updatedUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//DELETED USER
export const deletedUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
