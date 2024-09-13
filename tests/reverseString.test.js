const reverseString = require("./reverseString");

test("reverses letters in string", () => {
  expect(reverseString("radar")).toBe("radar");
  expect(reverseString("wheeeeee")).toBe("eeeeeehw");
  expect(reverseString("myString")).toBe("gnirtSym");
});
