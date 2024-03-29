const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  hostel: {
    type: String,
    required: true,
    unique: true
  },
  meal: {
    type: String,
    required: true
  },
  complementary1: {
    type: String,
    required: true
  },
  complementary2: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
