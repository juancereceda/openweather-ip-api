const server = require("../src/server");
const { testCurrent } = require("./current.test");
const { testForecast } = require("./forecast.test");
const { testLocation } = require("./location.test");

testLocation(server);
testForecast(server);
testCurrent(server);
