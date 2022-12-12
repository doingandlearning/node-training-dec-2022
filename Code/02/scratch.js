const wolf = {
  howl: function () {
    console.log(`${this.name} awoooooo`);
  },
};

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(`${this.name} woof`);
    },
  },
});

const rufus = Object.create(dog, {
  name: {
    value: undefined,
    configurable: false,
    enumerable: false,
    writable: false,
  },
});

console.log(rufus);
rufus.name = "John";
console.log(rufus);

rufus.woof();
