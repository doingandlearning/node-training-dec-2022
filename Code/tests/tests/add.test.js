const { add } = require("../add");

test("testing the happy path for add", () => {
  // t.equal(add(1, 2, 3), 6, "Added 1, 2 and 3 to make 6.");
  expect(add(1, 2, 3)).toEqual(6);
  // t.equal(add(-4, 2, 2, 3, 5), 8);
  expect(add(-4, 2, 2, 3, 5)).toEqual(8);
  // t.end();
});
test("testing the unhappy path for add", () => {
  // t.throws(() => add("1", true, []));
  expect(() => add("1", true, [])).toThrow();
  // t.end();
});
