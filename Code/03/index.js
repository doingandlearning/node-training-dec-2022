const { readFile } = require("node:fs");
const fs = require("node:fs");

const bigFile = __filename;
const mediumFile = __filename;
const smallFile = __filename;

const print = (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data.toString());
};
// Parallel Execution
// fs.readFile(bigFile, print);
// fs.readFile(mediumFile, print);
// fs.readFile(smallFile, print);

// // Big file -> medium -> small file
// fs.readFile(bigFile, (err, contents) => {
//   print(err, contents);
//   fs.readFile(mediumFile, (err, contents) => {
//     print(err, contents);
//     fs.readFile(smallFile, print);
//   });
// });

//
const fileArray = [bigFile, "not exist", smallFile];
let index = 0;
const data = [];
const read = (file) => {
  readFile(file, (err, contents) => {
    index += 1;
    if (err) print(err);
    else data.push(contents);
    if (index < fileArray.length) read(fileArray[index]);
    else print(null, Buffer.concat(data));
  });
};

read(fileArray[0]);
