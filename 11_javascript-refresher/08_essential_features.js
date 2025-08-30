const hobbies = ["Cooking", "Baking", "Video Editing"]; 

hobbies.map (hobby => {
    console.log(hobby);

});

//Destructing objects
const student = {name: "Myriah Vielle", age:23}
const {name, age} = student;

console.log(name); 
console.log(age);

//Spread operator
const numbers = [1,2,3];
const newNumbers = [...numbers, 4,5];

console.log (`The original array of numbers are ${numbers}.`)
console.log (`The new array of numbers are ${newNumbers}.`)
