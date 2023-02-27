// let age = 32;
// let userName = "Max";
// let hobbies = ["Sports", "Cooking", "Reading"];
// let job = {
//   title: "Software Engineer",
//   place: "Cairo",
//   salary: 50000,
// };

// function calculateAdultYears(userAge) {
//   return userAge - 18;
// }

// alert(calculateAdultYears(age));

// age = 45;
// alert(calculateAdultYears(age));

let courseName = "100 Days of Code - 2023 Web Development Bootcamp";
let coursePrice = 70;
let courseGoals = [
  "To be a great web developer.",
  "Because I love programming.",
  "Because I want to learn how the internet works.",
];

alert(courseName);
alert(coursePrice);
alert(courseGoals);

let course = {
  name: courseName,
  price: coursePrice,
  goals: courseGoals,
};

let resultName, resultPrice, resultGoals;

function accessCourse() {
  resultName = course.name;
  resultPrice = course.price;
  resultGoals = course.goals;
}

accessCourse();

alert(resultName);
alert(resultPrice);
alert(resultGoals);
