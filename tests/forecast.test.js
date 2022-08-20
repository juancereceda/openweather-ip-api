const request = require("supertest");

const testForecast = (server) => {
  describe("GET /forecast", () => {
    it("Should return information about my location according to ip-api, and forecast according to openWeather", (response) => {
      request(server)
        .get("/v1/location")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return information about Atlanta's location according to ip-api, and forecast according to openWeather", (response) => {
      request(server)
        .get("/v1/forecast?city=atlanta")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return a 400 status code when the city is invalid", (response) => {
      request(server)
        .get("/v1/forecast?city=invalidCity")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400, response)
        .expect({ error: "City is not valid" });
    });
    it("Should return a 404 status code if the city is not found in openWeather", (response) => {
      request(server)
        .get("/v1/forecast?city=bahiaBlanca")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404, response)
        .expect({ error: "Request failed with status code 404" });
    });
  });
};

module.exports = {
  testForecast,
};
