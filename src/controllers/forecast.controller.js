const getLocationAndForecastWeather = async (req, res) => {
  try {
    res.json({ message: "getLocationAndForecastWeather" });
  } catch (error) {}
};

module.exports = {
  getLocationAndForecastWeather,
};
