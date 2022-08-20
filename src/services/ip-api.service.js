const fs = require("fs");
const axios = require("axios");

const ipApiBaseURL = "https://ip-api.com/json";

const getCityLocation = async (city) => {
  try {
    const citiesIPs = JSON.parse(
      fs.readFileSync("./src/data/citiesIPs.config.json", "utf-8")
    );
    const cityIP = city && citiesIPs[city];
    if (city && !cityIP) {
      throw new Error("City is not valid");
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
