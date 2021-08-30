const { vehicles } = require("../models");

module.exports = {
  async getAllVehicles(req, res) {
    try {
      const category = await vehicles.findAll();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getVehicle(req, res) {
    try {
      const vehicle = await vehicles.findByPk(req.params.id);
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postVehicles(req, res) {
    try {
      const category = await vehicles.create(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async putVehicles(req, res) {
    try {
      await vehicles.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({succes: 'se ha modificado el vehículo'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteVehicles(req, res) {
    try {
      const response = await vehicles.destroy({
        where: { id: req.params.id },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  },
};