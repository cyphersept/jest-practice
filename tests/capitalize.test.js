const capitalize = require("./capitalize.js");

test("capitalize first letter of string", () => {
  expect(capitalize("here's my test string")).toBe("Here's my test string");
  expect(capitalize("another string")).toBe("Another string");
  expect(capitalize("Already capitalized")).toBe("Already capitalized");
});
