const { getCityLocation } = require("../services/ip-api.service");
const { getCityWeather } = require("../services/open-weather.service");

const getLocationAndCurrentWeather = async (req, res) => {
  try {
    const cityLocation = await getCityLocation(req.query.city);
    const cityWeather = await getCityWeather(cityLocation.city);
    res.status(200).json({ location: cityLocation, weather: cityWeather });
  } catch (error) {
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocationAndCurrentWeather,
};
