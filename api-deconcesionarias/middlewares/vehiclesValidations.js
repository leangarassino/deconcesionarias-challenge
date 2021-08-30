const Joi = require("joi");

const blueprintRegister = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().required(),
  model: Joi.number().required(),
});
const validateVehicles = (req, res, next) => {
  const result = blueprintRegister.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422).json(result.error.message);
  }
};

module.exports = validateVehicles;