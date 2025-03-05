//1. Вивести всі елементи масиву в консоль:

let arr = [10, 'hello', 42, 'world'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// 2. Вивести всі парні числа з масиву:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}


//3. Об’єднати два масиви:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged);


// 4. Перевернути масив:

let reversedArr = [6, 5, 4].reverse();
console.log(reversedArr);


// 5. Додати елементи в кінець масиву:

let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);


// 6. Додати елементи на початок масиву:

let arr4 = [7, 8, 9];
arr4.unshift(1, 2, 3);
console.log(arr4);


// 7. Вивести перший елемент і видалити його:

let arr5 = ['aaa', 'bbb', 'ccc'];
console.log(arr5.shift());
console.log(arr5);


//8. Вивести останній елемент і видалити його:

let arr6 = ['aaa', 'bbb', 'ccc'];
console.log(arr6.pop());
console.log(arr6);


// 9. Скопіювати з другого по п’ятий елементи в новий масив:

let arr7 = [9, 10, 11, 12, 13];
let newArr = arr7.slice(1, 5);
console.log(newArr);


// 10. Зробити з масиву [1, 2, 3, 4, 5] масив [1, 4, 5]:

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(1, 2);
console.log(arr8);


// 11. Скопіювати [3, 4, 5] у новий масив:

let arr9 = [1, 2, 3, 4, 5];
let copiedArr = arr9.slice(2);
console.log(copiedArr);


// 12. Оновити масив, додавши елементи в середину:

let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 0, 'w', 'trtr');
arr10.splice(6, 0, 'vvv', 'a', 'hello');
console.log(arr10);


// 13. Підрахунок голосних у рядку

function countVowels(str, vowelsArray) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      count++;
    }
  }
  return count;
}

let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

console.log(countVowels('hello to you', vowels)); // 6
console.log(countVowels('lorem ipsum dolor sit amet', vowels)); // 9
