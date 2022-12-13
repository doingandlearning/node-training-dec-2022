const { fetchData } = require("../req");

test("handles network errors", (done) => {
  fetchData("http://error.com")
    .then(() => {
      throw new Error("This should never be reached.");
    })
    .catch((error) => {
      // t.equal(error.message, "Dodgy site!");
      expect(error.message).toEqual("Dodgy site!");
      // t.equal(typeof error, typeof Error());
      expect(typeof error).toEqual(typeof Error());
      done();
    });
});

test("response with some data", async () => {
  // Arrange
  const url = "http://someurl.com";

  // Act
  const data = await fetchData(url);

  // Assert
  // t.equal(Buffer.isBuffer(data), true);
  // t.equal(data.toString(), "some data");
  // t.end();
  expect(Buffer.isBuffer(data)).toEqual(true);
  expect(data.toString()).toEqual("some data");
  expect(data.toString()).not.toEqual("some other data");
});
