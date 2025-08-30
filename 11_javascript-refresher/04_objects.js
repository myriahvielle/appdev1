//declaring objects with properties
let aboutMe = {
    name: "Myriah Vielle A. Silverio",
    age: 23,
    course: "Bachelor of Science in Information Systems",

    //Method
    introduce: function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. `)
    }
}; 
//Calling the method
aboutMe.introduce();

//adding a new property after creating the object
aboutMe.hobby = "cooking and baking";

console.log(`My hobby is ${aboutMe.hobby}.`);
