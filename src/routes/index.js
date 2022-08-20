const { Router } = require("express");
const router = Router();

const currentRoutes = require("./current");
const forecastRoutes = require("./forecast");
const locationRoutes = require("./location");

router.use("/current", currentRoutes);
router.use("/forecast", forecastRoutes);
router.use("/location", locationRoutes);

module.exports = router;
