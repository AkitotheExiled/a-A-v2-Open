function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n <= 0 || n >= 1000000) {
    throw TypeError("N must greater than 0");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
