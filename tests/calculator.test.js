const calculator = require("./calculator.js");

describe("add two numbers", () => {
  it("performs the operation", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  it("can handle negatives", () => {
    expect(calculator.add(0, 5)).toBe(5);
  });
  it("parses numerical strings", () => {
    expect(calculator.add(1, "2")).toBe(3);
  });
  it("operates correctly on floats", () => {
    expect(calculator.add(1.1, 2.2)).toBeCloseTo(3.3);
  });
});

describe("subtract two numbers", () => {
  it("performs the operation", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  it("can handle negatives", () => {
    expect(calculator.subtract(3, -2)).toBe(5);
  });
  it("parses numerical strings", () => {
    expect(calculator.subtract("3", 2)).toBe(1);
  });
  it("operates correctly on floats", () => {
    expect(calculator.subtract(3, 2.5)).toBeCloseTo(0.5);
  });
});

describe("multiply two numbers", () => {
  it("performs the operation", () => {
    expect(calculator.multiply(0, 2)).toBe(0);
  });
  it("can handle negatives", () => {
    expect(calculator.multiply(3, -2)).toBe(-6);
  });
  it("parses numerical strings", () => {
    expect(calculator.multiply("100", 2)).toBe(200);
  });
  it("operates correctly on floats", () => {
    expect(calculator.multiply(3, 2.5)).toBeCloseTo(7.5);
  });
});

describe("divide two numbers", () => {
  it("performs the operation", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  it("can handle negatives", () => {
    expect(calculator.divide(3, -2)).toBe(-1.5);
  });
  it("parses numerical strings", () => {
    expect(calculator.divide("9", 3)).toBe(3);
  });
  it("operates correctly on floats", () => {
    expect(calculator.divide(20, 1.5)).toBeCloseTo(20 / 1.5);
  });
});
