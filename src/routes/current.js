const { Router } = require("express");
const currentRouter = Router();

const {
  getLocationAndCurrentWeather,
} = require("../controllers/current.controller");

currentRouter.get("/", getLocationAndCurrentWeather);

module.exports = currentRouter;
