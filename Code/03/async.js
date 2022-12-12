// const fs = require("node:fs/promises");

// async function run() {
//   const contents = await fs.readFile(__filename);
//   console.log(contents.toString());
// }

// // run();

// function test() {}

// // run().then();

// async function asyncFunction(test) {
//   try {
//     if (test) {
//       return true;
//     }
//     throw new Error("Didn't work");
//   } catch (error) {
//     throw error;
//   }
// }

// console.log(
//   asyncFunction(false)
//     .then((result) => console.log(result))
//     .catch((error) => console.log("it's not all bad!"))
// );

// fetch("https://swapi.dev/api/people")
//   .then((result) => result.json())
//   .then((data) => console.log(data));

async function fetchData(endpoint) {
  const response = await fetch(`https://swapi.dev/api/${endpoint}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

Promise.all([
  fetchData("people"),
  fetchData("planets"),
  fetchData("starships"),
]).then((data) => console.log(data));
