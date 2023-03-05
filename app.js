let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Software Engineer",
  place: "Cairo",
  salary: 50000,
};

function calculateAdultYears(userAge) {
  return userAge - 18;
}

console.log(calculateAdultYears(age));

age = 45;
console.log(calculateAdultYears(age));

let person = {
  name: "Max", // Prperty
  greet() {
    // Method
    console.log("Hello!");
  },
};

person.greet();
