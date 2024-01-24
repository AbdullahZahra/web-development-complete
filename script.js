const age = 23;
// age >= 18
//   ? console.log("I like to drink tea")
//   : console.log(`I like to drink water`);

const drink = age >= 18 ? "tea" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "tea";
} else {
  drink2 = "water";
}
console.log(drink2);
