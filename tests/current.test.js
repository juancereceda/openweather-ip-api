const request = require("supertest");

const testCurrent = (server) => {
  describe("GET /current", () => {
    it("Should return information about my location according to ip-api, and current weather according to openWeather", (response) => {
      request(server)
        .get("/v1/current")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return information about Atlanta's location according to ip-api, and current weather according to openWeather", (response) => {
      request(server)
        .get("/v1/current?city=atlanta")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return a 400 status code when the city is invalid", (response) => {
      request(server)
        .get("/v1/current?city=invalidCity")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400, response)
        .expect({ error: "City is not valid" });
    });
    it("Should return a 404 status code if the city is not found in openWeather", (response) => {
      request(server)
        .get("/v1/current?city=bahiaBlanca")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404, response)
        .expect({ error: "Request failed with status code 404" });
    });
  });
};

module.exports = {
  testCurrent,
};
