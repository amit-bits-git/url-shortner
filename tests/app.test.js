// tests/app.test.js
const request = require("supertest");
const app = require("../app");

describe("Index Route", () => {
  test("GET / should return status 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

describe("Auth Route", () => {
  test("GET /auth/google should redirect to Google OAuth", async () => {
    const res = await request(app).get("/auth/google");
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toMatch(/^https:\/\/accounts\.google\.com/);
  });
});
