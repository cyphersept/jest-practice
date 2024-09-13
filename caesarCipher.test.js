const caesar = require("./caesarCipher.js");

describe("caesar-shifts string by a number factor", () => {
  test("shift by factor", () => {
    expect(caesar("abc", 3)).toBe("def");
  });
  test("shift by 0", () => {
    expect(caesar("abc", 0)).toBe("abc");
  });
  test("wraps around from z to a", () => {
    expect(caesar("xyz", 3)).toBe("abc");
  });
  test("shifts by a large factor", () => {
    expect(caesar("abc", 53)).toBe("bcd");
  });
  test("preserves capitalization (simple)", () => {
    expect(caesar("OPQ", 1)).toBe("PQR");
  });
  test("preserves capitalization (complex)", () => {
    expect(caesar("dEf", 1)).toBe("eFg");
    expect(caesar("dEf", 1)).not.toBe("efg");
  });
  test("preserves non-letters", () => {
    expect(caesar("foo, bar!", 1)).toBe("gpp, cbs!");
  });
  test("shifts by 1 if no factor is given", () => {
    expect(caesar("jkl")).toBe("klm");
  });
});
