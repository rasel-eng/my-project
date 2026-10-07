const request = require("supertest");
const app = require("../src/server");

describe("GET /", () => {
  test("should return success response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
  });
});