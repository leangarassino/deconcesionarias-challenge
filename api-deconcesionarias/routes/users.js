const express = require("express");
const router = express.Router();
const {getAllUsers, getUser, postUser, loginUser, deleteUser} = require('../controllers/userControllers')
const validateRegister = require('../middlewares/usersValidations')
const verifyToken = require('../middlewares/verifyToken')
/* GET users listing. */
router.get("/", getAllUsers);
router.get("/:id", getUser)
router.post("/register",validateRegister, postUser)
router.post("/login", loginUser)
router.delete("/:id",verifyToken, deleteUser)

module.exports = router;
