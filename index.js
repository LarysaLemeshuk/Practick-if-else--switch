//Задача 1

let input1 = prompt("Введіть перше число");
let input2 = prompt("Введіть друге число");
let number1 = Number(input1);
let number2 = Number(input2);

let sum = number1 + number2;

if (sum % 5 === 0) {
  alert("Сума кратна 5");
} else {
  //  alert("Сума не кратна 5");
}

//Задача 2

function calculatorArea (Length){
  return length * length;
}
let length = 5;
console.log();

//Задача 3
function drink() {
  let choice = prompt("Оберіть напій:\n1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода");
  choice = Number(choice);

  switch (choice) {
    case 1:
      alert("Ви обрали чай");
      break;
    case 2:
      alert("Ви обрали каву");
      break;
    case 3:
      alert("Ви обрали сік");
      break;
    case 4:
      alert("Ви обрали воду");
      break;
    default:
      alert("Такого напою у нас нема");
  }
}

drink();

// Задача 4

let purchaseAmount = prompt('Введіть суму покупки:');
purchaseAmount = Number(purchaseAmount);
let discount = purchaseAmount > 800 ? 5 : (purchaseAmount > 500 ? 3 : 0);
let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

//Задача 5

function divideWithoutRemainder(a, b) {
  return a % b === 0;
}
let num1 = 10;
let num2 = 5;
divideWithoutRemainder (num1, num2);




