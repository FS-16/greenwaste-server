import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  //HASH PASSWORD
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // CREATE NEW USER
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json('User berhasil di daftarkan!!');
  } catch (error) {
    next(errorHandler(550, 'name and email already exist'));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User tidak ditemukan!'));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Password Salah!'));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_KEY);

    // REMOVE PASSWORD when TO SEND CLIENT
    const { password: pass, ...rest } = validUser._doc;

    res.cookie('token_access', token, { httOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
