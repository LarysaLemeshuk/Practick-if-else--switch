//1. Вивести рядок задом наперед:

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello, world!'));

//2. Функція для отримання лише цілої частини числа:

function getIntegerPart(num) {
  return Math.trunc(num);
}

console.log(getIntegerPart(10.56)); 
console.log(getIntegerPart(-3.99)); 

Math.trunc();


//3. Отримати ім’я від користувача та вивести великими літерами:

let userName = prompt ('Введіть ваше імʼя')
if (userName) {
  alert(userName.toUpperCase());
}


//4. Функція для форматування дати:

function formatDate(dateStr) {
  let [year, day, month] = dateStr.split('-');
  return `${day}.${month}.${year}`;
}

console.log(formatDate('2021-22-09'));


//5. Функція порівняння рядків без урахування регістру:

function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(isEqual('pApA', 'papa')); 
console.log(isEqual('qwerty', 'QWErty')); 
console.log(isEqual('aaa', 'EEE')); 
