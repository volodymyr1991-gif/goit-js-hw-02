let total = 0;
let input;
const numbers = [];

while (true) {
  let input = prompt("Введіть число");
  if (input === null) {
    alert("Відмінено користувачем");
    break;
  }
  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    alert("Ви ввели не число");
    continue;
  }
  numbers.push(input);
 
}
for (let i = 0; i < numbers.length; i += 1) {
    console.log(i,numbers[i],total);
  total = total + numbers[i];
  console.log(total)
}


alert(`Загальна сума чисел дорівнює ${total}`);
