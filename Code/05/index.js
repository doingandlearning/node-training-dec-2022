function f(n = 99) {
  // debugger;
  if (n === 0) throw Error();
  if (n === 1) {
    console.log("All done now");
    // process.exit() // It works now!
  }
  f(n - 1);
}
f();
