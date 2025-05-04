// tests/shortener.test.js
const generateShortCode = require("../utils/shortener");

describe("generateShortCode", () => {
  test("should return a string of length 6", () => {
    const shortCode = generateShortCode("https://example.com");
    expect(typeof shortCode).toBe("string");
    expect(shortCode).toHaveLength(6);
  });

  test("should return consistent codes for the same URL", () => {
    const code1 = generateShortCode("https://example.com");
    const code2 = generateShortCode("https://example.com");
    expect(code1).not.toBe(code2);
  });
});
