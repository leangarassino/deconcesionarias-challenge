const Joi = require("joi");

const blueprintCategory = Joi.object({
  name: Joi.string().min(2).required(),
  icon: Joi.string().required(),
});

const validateCategories = (req, res, next) => {
  const result = blueprintCategory.validate(req.body);
  if (!result.error) {
    next();
  } else {
    res.status(422).json({ error: result.error.message });
  }
};

module.exports = validateCategories;
