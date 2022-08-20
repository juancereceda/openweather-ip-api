const getLocationAndCurrentWeather = async (req, res) => {
  try {
    res.json({ message: "getLocationAndCurrentWeather" });
  } catch (error) {}
};

module.exports = {
  getLocationAndCurrentWeather,
};
