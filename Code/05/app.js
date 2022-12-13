// console.group();
// console.log("Hello");
// console.warn("Whoops!");
// console.groupEnd();

// console.info("Yo!");
// console.error("Ahh!!");

// const numbers = [10, 20, 300, 4000, 5000];

// console.time();
// numbers.reduce((a, c) => a * c, 1);
// console.timeEnd();
// console.time();
// numbers.reduce((a, c) => a * c, 1);
// console.timeEnd();

async function getData() {
  const response = await fetch("https://swapi.dev/api/planets");
  const data = await response.json();
  console.dir(Array);
}

// getData();

for (let i = 0; i < 10; i++) {
  // do somework
  if (i % 2 === 0) {
    console.count();
  }
}
