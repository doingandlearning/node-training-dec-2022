const { run } = require("node:test");
const { setTimeout } = require("node:timers/promises");

// Promise.race([
//   fetch("https://swapi.dev/api/planets"),
//   setTimeout(100, "It's me!"),
// ]).then((data) => console.log(data));

const ac = new AbortController();
// fetch("https://swapi.dev/api/planets", { signal: ac.signal })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     if (error.name === "AbortError") {
//       console.log("Took too long, sorry!");
//     }
//   });

async function fetchData(endpoint) {
  const response = await fetch(`https://swapi.dev/api/${endpoint}`, {
    signal: ac.signal,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}
Promise.race([
  fetchData("planets"),
  fetchData("people"),
  fetchData("starships"),
]).then((data) => {
  ac.abort();
  console.log(data);
});
