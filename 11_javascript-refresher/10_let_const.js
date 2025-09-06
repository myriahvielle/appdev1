//var
var name = "Myriah Vielle"; 
var age = 23;
age = 12; // reassigning is allowed
console.log("var ->", name, age);

//let
let province = "Pampanga";
province = "Bulacan"; // reassigning is allowed 
console.log("let ->", province);

//const
const country = "Philippines";
//country = "Brazil";// cannot be reassigned 
console.log("const ->", country);

//
if (true) {
  var testVar = "I am var";
  let testLet = "I am let";
  const testConst = "I am const";
  console.log("Inside block:", testVar, testLet, testConst);
}
console.log("Outside block -> var:", testVar); 

