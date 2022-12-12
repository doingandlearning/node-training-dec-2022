const fs = require("node:fs");

// function myAsyncOperation(cb) {
//   doSomethingAsycc((err, value) => cb(err, value));
// }

function myAsyncOperation(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, contents) => {
      if (err) {
        reject(err);
      }
      resolve(contents);
    });
  });
}

// myAsyncOperation("does-not-exist")
//   .then((data) => console.log(data.toString()))
//   .catch((err) => console.log("i'm in the catch", err));

// Promise.all([
//   myAsyncOperation(__filename),
//   myAsyncOperation("error"),
//   myAsyncOperation(__filename),
// ])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

Promise.allSettled([
  myAsyncOperation(__filename),
  myAsyncOperation("error"),
  myAsyncOperation(__filename),
]).then((data) => {
  data
    .filter(({ status }) => status === "rejected")
    .forEach((error) => console.error(error));
  const contents = data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);

  console.log(Buffer.concat(contents).toString());
});

// Waiter - takes my order
// Note ... order ... promise  <Pending> . <Unresolved> <Unsettled>
//   - rejected ... settled
//   - resolve  ... settled
