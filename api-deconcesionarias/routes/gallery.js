const express = require("express");
const router = express.Router();
const {
  getAllGalleries,
  getGallery,
  postGalleries,
  putGalleries,
  deleteGalleries,
} = require("../controllers/galleryControllers");

router.get("/", getAllGalleries);
router.get("/:id", getGallery);
router.post("/", postGalleries);
router.put("/:id", putGalleries);
router.delete("/:id", deleteGalleries);

module.exports = router;
