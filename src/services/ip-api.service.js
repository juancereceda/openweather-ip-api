const fs = require("fs");
const axios = require("axios");
const { ipApiBaseURL } = require("../data/baseURLs");

const getCityLocation = async (city) => {
  try {
    const citiesIPs = JSON.parse(
      fs.readFileSync("./src/data/citiesIPs.config.json", "utf-8")
    );
    const cityIP = city && citiesIPs[city];
    if (city && !cityIP) {
      throw new Error("City not found");
    }
    const ipServiceURL = `${ipApiBaseURL}/${cityIP || ""}`;
    const ipApiResponse = (await axios.get(ipServiceURL)).data;
    return ipApiResponse;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCityLocation,
};
