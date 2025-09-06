//Object destructuring
const person = {
  name: "Myriah Vielle", 
  age: 23     
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

//Array destructuring
const hobbies = ["Reading", "Baking"];
const [hobby1, hobby2] = hobbies;
console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);

function printName({ name }) {
  console.log("From function:", name);
}

printName(person);