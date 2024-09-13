function analyzeArray(arr) {
  if (!Array.isArray(arr)) return false;
  else if (!arr.length > 0) return false;
  else if (!arr.every((e) => typeof e === "number")) {
    return false;
  } else
    return {
      average: arr.reduce((prev, curr) => prev + curr) / arr.length,
      max: arr.reduce((prev, curr) => (curr > prev ? curr : prev)),
      min: arr.reduce((prev, curr) => (curr < prev ? curr : prev)),
      length: arr.length,
    };
}

module.exports = analyzeArray;
