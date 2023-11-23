import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('User Register Successfully');
  } catch (error) {
    next(errorHandler(500, 'Error User already Register'));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User Not Found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Password Wrong !!'));

    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('token_access', token, {
        httpOnly: true,
        // Expire date cookie
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
