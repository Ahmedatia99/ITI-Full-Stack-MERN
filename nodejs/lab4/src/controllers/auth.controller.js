const { registerService } = require("../services/register.service");
const { loginService } = require("../services/login.service");

exports.register = async (req, res, next) => {
  try {
    const result = await registerService(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await loginService(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
