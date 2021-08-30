const { categories } = require("../models");

module.exports = {
  async getAllCategories(req, res) {
    try {
      const category = await categories.findAll();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getCategory(req, res) {
    try {
      const category = await categories.findByPk(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postCategories(req, res) {
    try {
      const category = await categories.create(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async putCategories(req, res) {
    try {
      await categories.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ succes: "se ha modificado la categoría" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteCategories(req, res) {
    try {
      const response = await categories.destroy({
        where: { id: req.params.id },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
