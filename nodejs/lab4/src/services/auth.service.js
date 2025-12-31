const User = require('../models/user');

const {hashPassword, comparePassword} = require('../utils/hash');
const {generateToken} = require('../utils/jwt');

exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;
exports.generateToken = generateToken;

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findUserById = async (id) => {
  return await User.findById(id);
};