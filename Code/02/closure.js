// // function init() {
// //   let name = "Mozilla"; // name is a local variable created by init
// //   function displayName() {
// //     // displayName() is the inner function, a closure
// //     console.log(name); // use variable declared in the parent function
// //   }
// //   displayName();
// // }
// // init();

// // function createAdder(value) {
// //   return (arg) => arg + value;
// // }

// // const add5 = createAdder(5);
// // console.log(add5(6));

// function trackAdmins() {
//   let admins = [];

//   return {
//     list: admins,
//     add: (name) => admins.push(name),
//     empty: () => {
//       admins = [];
//     },
//   };
// }

// const otsAdmins = trackAdmins();

// console.log(otsAdmins.list);
// console.log(otsAdmins.add("Mike"));
// console.log(otsAdmins.list);
// otsAdmins.empty();
// console.log(otsAdmins.list);

function createSigner(secret) {
  const keypair = {
    publicKey: secret.toLowerCase(),
    privateKey: secret.toUpperCase(),
  };

  return function (content) {
    return {
      signed: content
        .split("")
        .map(
          (char, idx) =>
            `${char}${keypair.privateKey[idx % keypair.privateKey.length]}`
        )
        .join(""),
      publicKey: keypair.publicKey,
    };
  };
}

const kevinsSigner = createSigner("tHIsisAsecret12");

console.log(kevinsSigner("Hi kevin, can we hire you for some crypto?"));
