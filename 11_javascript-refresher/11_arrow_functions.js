//One parameter_EXPLICIT
const greet = (name) => {
  return `Hello, ${name}`;
};
console.log(greet("Myriah"));

//One Parameter_Implicit 
const greetImplicit = name => `Hello, ${name}`;
console.log(greetImplicit("Vielle"));

//Square_Explicit 
 square = (n) => {
  return n * n; 
};
//Square_Implicit
const Square_Implicit = n => n * n; 

console.log("Square (explicit):", square(5));
console.log("Square (implicit):", Square_Implicit(6));

//sayHi()_Explicit
const sayHi = () => {
  return "Hi!"; 
};

//sayHi()_Implicit
const sayHi_Implicit = () => "Hi!"; // implicit return

console.log("sayHi explicit:", sayHi());
console.log("sayHi implicit:", sayHi_Implicit());