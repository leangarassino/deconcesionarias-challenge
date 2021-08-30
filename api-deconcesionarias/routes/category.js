const express = require("express");
const router = express.Router();
const {getAllCategories, getCategory, postCategories, putCategories, deleteCategories } = require('../controllers/categoryControllers')
const validateCategories = require('../middlewares/categoriesValidations')
const verifyToken = require('../middlewares/verifyToken')

router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.post("/",[validateCategories,verifyToken], postCategories)
router.put("/:id",[validateCategories,verifyToken], putCategories)
router.delete("/:id",verifyToken, deleteCategories)

module.exports = router;
