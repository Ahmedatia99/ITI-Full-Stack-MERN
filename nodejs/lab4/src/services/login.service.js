require("./auth.service");
const  User  = require("../models/user");

exports.loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken({ id: user._id });
  return { user, token };
};
