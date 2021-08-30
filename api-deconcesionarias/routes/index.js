const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const categoryRouter = require("./category");
const vehicleRouter = require("./vehicle");
const vehiclePropertyRouter = require("./vehicleproperty");
const galleryRouter = require("./gallery");

router.use("/users", usersRouter);
router.use("/categories", categoryRouter);
router.use("/vehicles", vehicleRouter);
router.use("/properties", vehiclePropertyRouter);
router.use("/galleries", galleryRouter);
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
