const calculator = {
  add: (a, b) => {
    return parseFloat(a) + parseFloat(b);
  },
  subtract: (a, b) => {
    return parseFloat(a) - parseFloat(b);
  },
  multiply: (a, b) => {
    return parseFloat(a) * parseFloat(b);
  },
  divide: (a, b) => {
    return parseFloat(a) / parseFloat(b);
  },
};

module.exports = calculator;
