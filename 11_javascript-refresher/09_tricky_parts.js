//Difference of == and === 
console.log('"5" == 5:', "5"== 5);
console.log('"5" === 5:', "5"=== 5);

//Undefined vs. Null
let a;
const b = null; 
console.log("a:", a);
console.log("b:", b);

//Regular function vs Arrow function
//Regular function

const user = {
    name: "Myriah Vielle",
    regularFunction: function() {
        console.log("regularFunction ->", this.name); 
    },
    arrowFunction: () => {
        console.log("arrowFunction ->", name);
    }
};
user.regularFunction();
user.arrowFunction();

//
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log("arr1 after modifying arr2:", arr1); // [1,2,3,4]
console.log("arr2:", arr2);                     // [1,2,3,4]

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; 
arr4.push(4);

console.log("arr3 after modifying arr4:", arr3); // [1,2,3]
console.log("arr4:", arr4);      