const express = require("express");
const router = express.Router();
const {getAllVehicles, getVehicle, postVehicles, putVehicles, deleteVehicles} = require('../controllers/vehicleControllers')
const validateVehicles = require('../middlewares/vehiclesValidations')
const verifyToken = require('../middlewares/verifyToken')

router.get("/", getAllVehicles);
router.get("/:id", getVehicle);
router.post("/",[validateVehicles, verifyToken], postVehicles)
router.put("/:id",[validateVehicles, verifyToken], putVehicles)
router.delete("/:id", deleteVehicles)

module.exports = router;
