// };
const checkForSpams = function (message) {
  const messageArr = message.split(" ");
  const spam = ["spam", "sale"];
  for (const element of messageArr) {
    for (const element2 of spam) {
      
     
      if (element.toLowerCase().indexOf(element2) !== -1) return true;
    }
 
  }
  return false;
};
console.log(checkForSpams("Get best sale offers now!")); // true

console.log(checkForSpams("Latest technology news")); // false

console.log(checkForSpams("JavaScript weekly newsletter")); // false

console.log(checkForSpams("[SPAM] How to earn fast money?")); // true
