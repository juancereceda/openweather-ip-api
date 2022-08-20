const axios = require("axios");
const { OPENWEATHER_API_KEY } = process.env;
const { openWeatherBaseURL, ipApiBaseURL } = require("../utils/api_urls");

const getLocationAndCurrentWeather = async (req, res) => {
  try {
    const city = req.query.city || (await axios.get(ipApiBaseURL)).data.city;
    const openWeatherURL = `${openWeatherBaseURL}weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    const openWeatherResponse = await axios.get(openWeatherURL);
    res.json({ weather: openWeatherResponse.data });
  } catch (error) {
    console.log(error);
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocationAndCurrentWeather,
};
