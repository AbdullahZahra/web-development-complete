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

alert(calculateAdultYears(age));

age = 45;
alert(calculateAdultYears(age));
