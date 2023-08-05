// REST AND SPREAD OPERATOR

// Using Rest
function add(...args) {
  let sum = 0;
  for (const number of args) {
    sum += number;
  }
  return sum;
}
console.log(add(5, 8, 7));

// Using Spread
let fruits = ["mango", "apple"];
let moreFruits = [...fruits, "banana", "paw paw"];
console.log(moreFruits);

// closures
let value = 2;
function doSomething() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let x = data.filter((num) => num % value === 0);
  return x;
}
console.log(doSomething());

function parent() {
  let count = 2;
  function counter() {
    count++;
    console.log(count);
  }
  setInterval(counter, 1000);
}
// parent();
let count = 1;
function counter() {
  count++;
  // console.log(count);
}
setInterval(counter, 1000);

//Revising High Order Functions
let animals = [
  {
    name: "bingo",
    specie: "dog",
  },
  {
    name: "eagle",
    specie: "bird",
  },
  {
    name: "pit bull",
    specie: "dog",
  },
  {
    name: "parrot",
    specie: "bird",
  },
  {
    name: "german shepherd",
    specie: "dog",
  },
];

// Using Normal For Loop
let answer = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].specie === "dog") {
    answer.push(animals[i]);
  }
}
console.log(answer);

// Using Filter
let filteredAnimals = animals.filter((animal) => animal.specie === "dog");
console.log(filteredAnimals);

// Decyphering the filter high order function
let isDog = function (animal) {
  return animal.specie == "dog";
};
let filterDog = animals.filter(isDog);
console.log(filterDog);

function fizzbuzz(n) {
  for (n = 1; n <= 25; n++) {
    n % 3 == 0 && n % 5 == 0
      ? console.log("fizzbuzz")
      : n % 3 == 0
      ? console.log("fizz")
      : n % 5 == 0
      ? console.log("buzz")
      : console.log(n);
  }
}
fizzbuzz(25);

// Short Circuiting with logical operators &&, ||, ??

// Using the sort method without manipulating the original array
let y = [1, 5, 3, 8, 6, 4];

let sorted = [...y].sort((a, b) => a - b);
console.log(sorted);
console.log(y);

let vehicles = [
  {
    name: "volvo",
    tyres: 4,
  },
  {
    name: "napep",
    tyres: 3,
  },

  {
    name: "bike",
    tyres: 2,
  },
];

let sortVeh = vehicles.slice().sort((a, b) => a.tyres - b.tyres);
console.log(sortVeh);
console.log(vehicles);

// Working with immutable Arrays
let birds = [
  {
    name: "parrot",
    color: "yellow",
    beak: "small",
    category: "pet",
    id: 1,
  },

  {
    name: "eagle",
    color: "black",
    beak: "long",
    category: "wild",
    id: 2,
  },
];

let newBird = {
  name: "hen",
  color: "grey",
  beak: "medium",
  category: "food",
  id: 3,
};

const addBird = [...birds, newBird];

const deleteBird = addBird.filter((bird) => bird.id !== 2);
console.log(deleteBird);

const updateBird = addBird.map((bird) =>
  bird.id == 3 ? { ...bird, color: "brown" } : bird
);
console.log(updateBird);
