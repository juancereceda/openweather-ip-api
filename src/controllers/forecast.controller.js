const axios = require("axios");
const { OPENWEATHER_API_KEY } = process.env;
const { openWeatherBaseURL, ipApiBaseURL } = require("../utils/api_urls");

const getLocationAndForecastWeather = async (req, res) => {
  try {
    const city = req.query.city || (await axios.get(ipApiBaseURL)).data.city;
    const openWeatherURL = `${openWeatherBaseURL}forecast?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    const openWeatherResponse = await axios.get(openWeatherURL);
    res.json({ forecast: openWeatherResponse.data });
  } catch (error) {
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocationAndForecastWeather,
};
