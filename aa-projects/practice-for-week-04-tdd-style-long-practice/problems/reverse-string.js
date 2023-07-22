module.exports = function reverseString(string) {
  if (typeof string !== "string") {
    throw TypeError("Argument provided was not a string!");
  }
  return string.split("").reverse().join("");
};
