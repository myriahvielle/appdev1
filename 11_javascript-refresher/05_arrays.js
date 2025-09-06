const favoriteFood = ["Sushi", "Chicken Wings", "Fruits"];

favoriteFood.push ("Frozen Yogurt"); 

favoriteFood.shift();

console.log("My favorite foods are:"); 
for (let food of favoriteFood) {
    console.log(food);
}


const likes = favoriteFood.map(food => `I like ${food}`);

console.log("\nWhat do I like to eat?");
console.log (likes);
