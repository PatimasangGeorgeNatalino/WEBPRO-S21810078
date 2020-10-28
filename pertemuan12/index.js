const calcAge = (birthYear, currentYear) => currentYear - birthYear;
console.log(calcAge(1998, 2025));

//Exercise
//Convert to ES6 Syntax
const yearUntilRetirement = (year = 2020, firstName = "George") => {
  let age = 25;
  let retirement = 69 - age;
  if(retirement > 0){
      console.log(`${firstName} retired in ${retirement} years.`);
  } else {
      console.log(`${firstName} is already retired.`);
  }
}
yearUntilRetirement();