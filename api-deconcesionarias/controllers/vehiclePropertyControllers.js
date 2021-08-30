const { vehicle_properties } = require("../models");

module.exports = {
  async getAllVehiclesProperties(req, res) {
    try {
      const category = await vehicle_properties.findAll();
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async getVehicleProperty(req, res) {
    try {
      const vehicleProperty = await vehicle_properties.findByPk(req.params.id);
      res.status(200).json(vehicleProperty);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async postVehiclesProperties(req, res) {
    try {
      const category = await vehicle_properties.create(req.body);
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async putVehiclesProperties(req, res) {
    try {
      await vehicle_properties.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({succes: 'se ha modificado la propiedad del vehículo'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async deleteVehiclesProperties(req, res) {
    try {
      const response = await vehicle_properties.destroy({
        where: { id: req.params.id },
      });
      if (response == 1) res.sendStatus(204);
      else res.sendStatus(404);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  },
};