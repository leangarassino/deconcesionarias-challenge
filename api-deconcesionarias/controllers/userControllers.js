const { users } = require("../models");
const bcrypt = require("bcrypt");
const { createToken } = require("../services/tokenService");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const allUsers = await users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getUser(req, res) {
    try {
      const user = await users.findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postUser(req, res) {
    try {
      const existingUser = await users.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (existingUser) {
        return res.status(400).json({
          error: "Email already registered",
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await users.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      // Valores de user.dataValues sin el password
      const { password, ...sentValues } = user.dataValues;
      // Creación del Token
      const token = createToken({ userId: sentValues.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async loginUser(req, res) {
    try {
      const values = req.body;
      const { email, password } = values;
      const user = await users.findOne({ where: { email: email } });
      if (!user) {
        res.status(404).json({ ok: false });
      } else {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // Valores de user.dataValues sin el password
          const { password, ...sentValues } = user.dataValues;
          const token = createToken({
            userId: user.id,
          });
          res.status(200).json({
            token,
            user: sentValues,
          });
        } else {
          res.status(401).json({ ok: false });
        }
      }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  },
  async deleteUser(req, res) {
    try {
      const response = await users.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
