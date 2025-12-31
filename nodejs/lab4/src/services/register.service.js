const { hashPassword, generateToken, createUser } = require("./auth.service");
const User = require("../models/user");

exports.registerService = async ({ email, password, name }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await createUser({ email, password: hashedPassword, name });
  const token = generateToken({ id: newUser._id });
  return { user: newUser, token };
};
