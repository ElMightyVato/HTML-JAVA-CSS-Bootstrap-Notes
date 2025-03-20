// let superhero = {
//     name: "Iron Man",
//     powers: ["Flight", "Super Strength", "Genius-level Intellect"],
//     suitcolor: "Red and Gold"
// };

// console.log(superhero.name[0]) // The output will be I since I is in index 0
// console.log(superhero["powers"]["flight"]) // The output will be yes since flight is in powers

// Adding a function to an object
 

// THIS

// let superhero = {
//     name: "Spider-man",
//     powers: ["Super Strength", "Spidey Sense", "Wall Crawler"],
//     suitcolor: "Red and blue",
//     Introduce: function() {
//         console.log("Your Friendly neighborhood " + this.name + ", and I'm ready to keep the streets safe!");
//         // the this keyword has the abilit to rever to whatever is inside the object so as you can tell name is spiderman
//     }
// };

// superhero.Introduce();

// COnstructors and Prototypes

function Superhero(name, powers, suitColor) {
    this.name = name;
    this.powers = powers
    this.suitColor = suitColor;
}

Superhero.prototype.introduce = function() { // The role of prototype is that it's something that's shared among all our contstructors
    // as long as they have superhero they will share the same prototype
    console.log("Your Friendly neighborhood " + this.name + ", and I'm ready to save the world!");
}

let iron = new Superhero("Iron Man", ["Flight", "Super Strength", "Genius-Level Intellect"], "Red and Gold");
let spiderman = new Superhero("Spider-Man", ["Wall-crawling", "Superhuman Agility", "Spider-sense"], "Red and blue");

ironMan.introduce()
spiderman.introduce()

// Math
 
let radius = 5; 

let area = Math.pi * Math.pow(radius, 2) // when doing power you want to do the integer followed by another which is the power to

console.log("The area of the circle with radius", radius, "is:", area.toFixed(2)) // The to fixed is how decimals you want it to

// Date
let currentDate = new Date()
console.log("Current Date:", currentDate)

let specificDate = new Date("2024-02-10T08:00:00");
console.log("Specific Date", specificDate) // IF you do specific it will do the date you want otherwise current will do the current date

// More examples of Date usage

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Adding 1 becasue months are zero based
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
let milisecond = currentDate.getMilliseconds();

console.log("year:", year);
console.log("Month:", month);
console.log("day:", day);
console.log("hour:", hour);
console.log("minute:", minute);
console.log("second:", second);
console.log("milisecond:", milisecond);

// MANIPULATING DATES

let currentDate = new Date()

currentDate.setDate(currentDate.getDate() + 7)
console.log("Date after adding 7 days:", currentDate)