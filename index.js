// 1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}


//2. Написати функцію, яка запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі).
// Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла)

function checkPassword() {
    const CORRECT_PASSWORD = "12345"; 
    let input;
    
    while (true) {
        input = prompt("Введіть пароль:");
        if (input === CORRECT_PASSWORD) {
            console.log("Ви успішно увійшли в систему");
            break;
        }
    }
}

checkPassword();



// 3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Сума чисел від 1 до 100:", sum);



// 4. Вивести числа від 10 до 50, які кратні 5.

for (let i = 10; i <= 50; i += 5) {
    console.log(i);
}



// 5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

// function drawTriangle(size) {
//     for (let i = 1; i <= size; i++) {
//         console.log("*".repeat(i));
//     }
// }

// let size = parseInt(prompt("Введіть розмір трикутника:"));
// drawTriangle(size);

 
// 6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

function squareWithDiagonal(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                row += '*';
            } else {
                row += '';
            }
        }
        console.log(row);
    }
}

let squareSize = parseInt(prompt('Введіть розмір квадрата'));

squareWithDiagonal(squareSize);
