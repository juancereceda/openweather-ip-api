const axios = require("axios");
const { OPENWEATHER_API_KEY } = process.env;

const openWeatherBaseURL = "https://api.openweathermap.org/data/2.5/";

const getCityWeather = async (city) => {
  try {
    const openWeatherURL = `${openWeatherBaseURL}weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    const openWeatherResponse = await axios.get(openWeatherURL);
    return openWeatherResponse.data;
  } catch (error) {
    throw error;
  }
};

const getCityForecast = async (city) => {
  try {
    const openWeatherURL = `${openWeatherBaseURL}forecast?q=${city}&appid=${OPENWEATHER_API_KEY}`;
    const openWeatherResponse = await axios.get(openWeatherURL);
    return openWeatherResponse.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCityWeather,
  getCityForecast,
};
