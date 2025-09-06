const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6]; 
console.log("Original numbers:", numbers);
console.log("Extended numbers:", moreNumbers);

const user = { name: "Myriah Vielle", age: 23 };
const extendedUser = { ...user, hobby: "Cooking" }; 
console.log("Original user:", user);
console.log("Extended user:", extendedUser);

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log("Sum of 1,2:", sum(1, 2));
console.log("Sum of 1,2,3,4:", sum(1, 2, 3, 4));