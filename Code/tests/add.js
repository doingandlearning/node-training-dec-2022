function add(...numbers) {
  if (numbers.some((item) => typeof item !== "number")) {
    throw new Error("All arguments must be numbers.");
  }
  return numbers.reduce((a, c) => a + c, 0);
}

module.exports = { add };
