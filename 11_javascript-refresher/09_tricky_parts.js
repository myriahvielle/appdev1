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

