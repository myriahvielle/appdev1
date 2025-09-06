// Greet Function
function greet(name) {
    return `Hello, ${name}!`; 
}
console.log(greet("Myriah Vielle"));

//Square Function
const square = (num) => `${num} squared is ${num * num}`;

console.log(square(2));

//Calculation Function
function calculator(a,b){ 
    let sum = a + b;
    let product = a * b;

    return `${a} + ${b} = ${sum}, ${a} * ${b} = ${product}`
}

console.log(calculator(1,2));
