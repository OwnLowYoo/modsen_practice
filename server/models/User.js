import mongoose from 'mongoose';

// eslint-disable-next-line new-cap
const userSchema = mongoose.Schema({
  name: {type: String, min: 2, max: 50, required: true},
  email: {type: String, min: 5, max: 50, required: true, unique: true},
  password: {type: String, required: true},
  ava: {type: String, default: ''},
});

const User = mongoose.model('user', userSchema);
export default User;
