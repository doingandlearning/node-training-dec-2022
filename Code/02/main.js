// let greeter = "Hey hi!";
// const times = 10;

// if (times > 3) {
//   greeter = "say Hello instead";
//   // console.log(greeter);
// }
// // console.log(greeter);

// const array = [1, 2, 3];
// const array2 = structuredClone(array); // Spread/Array.from/structuredClone
// array2.push(4);

// // console.log(array2);
// // console.log(array);

// const obj = { name: "Mike", location: "Southampton" };
// const obj2 = structuredClone(obj); // Spread/structuredClone
// obj2.location = "Bishops Cleve";

// // console.log(obj);
// // console.log(obj2);

// const objArray = [{ name: "Kevin" }, { name: "Mike" }];
// const objArray2 = structuredClone(objArray);

// objArray2.push({ name: "Barbara" });

// objArray2[0].name = objArray2[0].name.toUpperCase();

// // console.log(objArray);
// // console.log(objArray2);

// const yearsSinceGrad = [
//   { name: "Kevin", gradYear: 2004 },
//   { name: "Mike", gradYear: 2022 },
// ].reduce(
//   (previousValue, currentValue) => [...previousValue, currentValue.name],
//   []
// );

// const result = [1, 2, 3, 4, 5, 6].reduce(
//   (previousValue, currentValue, currentIndex) => previousValue + currentValue,
//   0
// );

// const numArr = [1, 2, 3, 4, 7, 5, 11, 5, 33, 6];

// const test = [...numArr].sort((a, b) => {
//   if (a < b) {
//     return -1231208937123908709283750183;
//   }
//   if (a > b) {
//     return +312501938512309578131;
//   }
//   return 0;
// });
// // console.log(test, numArr);
// // .map((currentItem, index, wholeArray) => )

// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
//   if (numArr[i] === 3) {
//     console.log(i);
//     break;
//   }
// }

// const output = numArr.forEach((item, i) => {
//   console.log(numArr[i]);
//   if (numArr[i] === 3) {
//     console.log(i);
//   }
// });

// console.log(output);

// // const [] = React.useState("")
// const names = ["Kevin", ["Mike", ["George", "Kath"]]];

// const [, [, [, kevinsWife]]] = names;

// console.log(kevinsWife);

// namedFunction();

// function namedFunction() {}

// const testFun = function () {};
// const testFunc = () => {};
// testFun();

// function invoker(func, arg) {
//   console.log("about to invoke");
//   return func(arg);
// }

// console.log(invoker((a) => a + 4, 8));

const str = `${1 + 1}



Hekllo!
`;

const obj = {
  sayHi: () => console.log("hi"),
};

obj.sayHi();
