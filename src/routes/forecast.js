const { Router } = require("express");
const forecastRouter = Router();

const {
  getLocationAndForecastWeather,
} = require("../controllers/forecast.controller");

forecastRouter.get("/", getLocationAndForecastWeather);

module.exports = forecastRouter;
