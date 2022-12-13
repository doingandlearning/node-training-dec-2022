const { setTimeout } = require("node:timers/promises");

async function fetchData(url) {
  await setTimeout(100);
  if (url === "http://error.com") throw new Error("Dodgy site!");
  return Buffer.from("some data");
}

module.exports = { fetchData };
