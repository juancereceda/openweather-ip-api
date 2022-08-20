const { getCityLocation } = require("../services/ip-api.service");
const { getCityForecast } = require("../services/open-weather.service");

const getLocationAndForecastWeather = async (req, res) => {
  try {
    const cityLocation = await getCityLocation(req.query.city);
    const cityForecast = await getCityForecast(cityLocation.city);
    res.status(200).json({ location: cityLocation, forecast: cityForecast });
  } catch (error) {
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocationAndForecastWeather,
};
