const { galleries } = require("../models");

module.exports = {
  async getAllGalleries(req, res) {
    try {
      const category = await galleries.findAll();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getGallery(req, res) {
    try {
      const gallery = await galleries.findByPk(req.params.id);
      res.status(200).json(gallery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postGalleries(req, res) {
    try {
      const category = await galleries.create(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async putGalleries(req, res) {
    try {
      await galleries.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({succes: 'se ha modificado la galeria'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteGalleries(req, res) {
    try {
      const response = await galleries.destroy({
        where: { id: req.params.id },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  },
};