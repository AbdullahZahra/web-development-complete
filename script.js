const age = "18";
if (age === 18) {
  console.log("You just became an adult :D (strict)");
}

if (age == 18) {
  console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool");
} else if (favourite === 7) {
  console.log("Cool 7");
} else {
  console.log("not cool");
}

if (favourite !== 23) console.log("Why not 23?");
