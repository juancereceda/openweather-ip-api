const { getCityLocation } = require("../services/ip-api.service");

const getLocation = async (req, res) => {
  try {
    const locationResponse = await getCityLocation(req.query.city);
    res.json({ location: locationResponse });
  } catch (error) {
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocation,
};
