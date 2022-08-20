const axios = require("axios");
const { ipApiBaseURL } = require("../utils/api_urls");

const getLocation = async (req, res) => {
  try {
    const locationResponse = await axios.get(ipApiBaseURL);
    res.json({ location: locationResponse.data });
  } catch (error) {
    res.status(error.response?.status || 400).json({ error: error.message });
  }
};

module.exports = {
  getLocation,
};
