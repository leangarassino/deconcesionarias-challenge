const express = require("express");
const router = express.Router();
const {getAllVehiclesProperties, getVehicleProperty, postVehiclesProperties, putVehiclesProperties, deleteVehiclesProperties} = require('../controllers/vehiclePropertyControllers')
const verifyToken = require('../middlewares/verifyToken')

router.get("/", getAllVehiclesProperties);
router.get("/:id", getVehicleProperty);
router.post("/",verifyToken, postVehiclesProperties)
router.put("/:id", putVehiclesProperties)
router.delete("/:id",verifyToken, deleteVehiclesProperties)

module.exports = router;
