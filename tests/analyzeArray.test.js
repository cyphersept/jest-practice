const analyze = require("./analyzeArray.js");

describe("returns { avg, min, max, length } of array", () => {
  test("return an obj", () => {
    expect(typeof analyze([1, 2, 3])).toBe("object");
  });
  test("get an average", () => {
    expect(analyze([10, 20, 30]).average).toBe(20);
    expect(analyze([10, -10, -30, 30]).average).toBe(0);
  });
  test("get the max", () => {
    expect(analyze([1, 2, 3, 20]).max).toBe(20);
    expect(analyze([0, -1, -10, -100]).max).toBe(0);
  });
  test("get the min", () => {
    expect(analyze([1, 2, 3, 20]).min).toBe(1);
    expect(analyze([0, -1, -10, -100]).min).toBe(-100);
  });
  test("get the length", () => {
    expect(analyze([2]).length).toBe(1);
    expect(analyze([0, 5, 10]).length).toBe(3);
  });
  test("return false on empty or invalid arrays", () => {
    expect(analyze([])).toBe(false);
    expect(analyze(["a", "b", 1])).toBe(false);
    expect(analyze([1, 2, 5, "abc"])).toBe(false);
  });
  test("returns false if not an array", () => {
    expect(analyze("not an array")).toBe(false);
  });
  test("analyze arrays with floats", () => {
    expect(analyze([0.1, 0.3, 0.5])).toEqual({
      average: 0.3,
      max: 0.5,
      min: 0.1,
      length: 3,
    });
  });
});
