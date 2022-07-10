const ageCalculator = (name, yearOfBirth, currentYear) => {
  const age = currentYear - yearOfBirth;
  const sentence = name + " is " + age + " years old.";
  return sentence;
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));