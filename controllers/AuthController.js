import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('User Register Successfully');
  } catch (error) {
    res.status(500).json(error.message);
  }
};
