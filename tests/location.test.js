const request = require("supertest");

const testLocation = (server) => {
  describe("GET /location", () => {
    it("Should return information about my location according to ip-api", (response) => {
      request(server)
        .get("/v1/location")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return information about my atlanta according to ip-api", (response) => {
      request(server)
        .get("/v1/location?city=atlanta")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, response);
    });
    it("Should return a 400 status code when the city is invalid", (response) => {
      request(server)
        .get("/v1/location?city=invalidCity")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400, response)
        .expect({ error: "City is not valid" });
    });
  });
};

module.exports = {
  testLocation,
};
