// REST AND SPREAD OPERATOR

//Using Rest
function add(...args) {
  let sum = 0;
  for (const number of args) {
    sum += number;
  }
  return sum;
}
console.log(add(5, 8, 7));

//Using Spread
let fruits = ["mango", "apple"];
let moreFruits = [...fruits, "banana", "paw paw"];
console.log(moreFruits);

// EXERCISES
let person = {
  firstname: "Adetola",
  Lastname: "Bakare",
  skills: ["html", "css", "javascript"],
};

//q1 create a method that gets the fullname of the person when invoked.

//solution
person.fullname = function () {
  return `My name is ${this.firstname} ${this.Lastname}`;
};
console.log(person.fullname());

//q2 add boostrap and saas to the skills

//solution
person.skills.push("boostrap", "saas");
console.log(person);

const users = {
  Adam: {
    email: "adam@123.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
  },
  Asab: {
    email: "asab@124.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Node"],
    age: 25,
  },
  Ahmad: {
    email: "ahmad@112.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Rust"],
    age: 30,
  },
  Ali: {
    email: "ali@113.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
  },
};

//q3 find the person with the most skills in the users object

//solution 1
const result = Object.fromEntries([
  Object.entries(users).sort(
    (a, b) => b[1].skills.length - a[1].skills.length
  )[0],
]);

//solution 2
const mostSkills = Object.entries(users)
  .map(
    (item) => `${item[1].skills.length} skills: ${item[0]}
    `
  )
  .sort()[3];
console.log(mostSkills);

//q4 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalincome, totalExpense, and accountBalance methods.

//solution
const personAccount = {
  firstname: "Ajoke",
  lastname: "Balogun",
  incomes: {
    tutorial: 5000,
    salary: 55000,
    youtube: 10000,
  },
  expenses: {
    foodStuff: 20000,
    utilities: 15000,
    miscellenous: 5000,
  },
  totalIncome: function () {
    let sum =
      this.incomes.tutorial + this.incomes.salary + this.incomes.youtube;
    let output = `Total income generated is: ${sum}`;
    return output;
  },
  totalExpense: function () {
    let sum =
      this.expenses.foodStuff +
      this.expenses.utilities +
      this.expenses.miscellenous;
    let output = `Total expenses incurred is: ${sum}`;
    return output;
  },
  accountBalance: function () {
    let splitIncome = parseInt(this.totalIncome().split(" ")[4]);
    let splitExpense = parseInt(this.totalExpense().split(" ")[4]);
    let balance = splitIncome - splitExpense;
    let output = `Account balance is: ${balance}`;
    return output;
  },
};
console.log(personAccount.accountBalance());
