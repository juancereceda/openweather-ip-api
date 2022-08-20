const { Router } = require("express");
const locationRouter = Router();

const { getLocation } = require("../controllers/location.controller");

locationRouter.get("/", getLocation);

module.exports = locationRouter;
