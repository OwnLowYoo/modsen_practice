import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import tryCatch from './utils/tryCatch.js';

export const register = tryCatch( async (req, res) => {
  const {name, email, password} = req.body;
  if (password.length<6) {
    return res.status(400).
        json({success: false,
          message: 'Пароль должен содержать более 6 символов'});
  }
  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({email: emailLowerCase});
  if (existedUser) {
    return res.
        status(400).
        json({success: false,
          message: 'Пользователь уже существует'});
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email: emailLowerCase,
    password: hashedPassword,
  });
  const {_id: id} = user;
  const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: '1h'});
  res.status(201).json({success: true,
    result: {id, name, email: user.email, token},
  });
});

export const login = tryCatch(async (req, res)=>{
  const {email, password} = req.body;
  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({email: emailLowerCase});
  if (!existedUser) {
    return res.
        status(404).
        json({success: false, message: 'Пользователь не существует'});
  }
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  if (!correctPassword) {
    return res.
        status(400).
        json({success: false, message: 'Неверный логин или пароль'});
  }
  const {_id: id, name} = existedUser;
  const token = jwt.sign({id, name}, process.env.JWT_SECRET, {expiresIn: '1h'});
  res.status(200).json({success: true,
    result: {id, name, email: emailLowerCase, token},
  });
});
