/*
1. Створити об’єкт user з наступними властивостями:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
*/

const user = {
  firstName: "Larysa",
  lastName: "Lemeshuk",
  mail: "Larysalemeshuk@gmail.com",
  password: "12345QWEERR",
  phoneNumber: "123456789",
  address: {
    city: "Kovel",
    street: "Kotova",
    house: 18,
    apartment: 5,
  },
};

console.log(user);

/*
2. Написати функцію, яка приймає об’єкт юзера і виводить вітання 
типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”
*/

function greetUser(user) {
  console.log(`Hello, ${user.firstName} ${lastName}`);
}
greetUser(user);

/*
3. Написати функцію, яка приймає об’єкт і виводить в консоль
 всі його властивості (за допомогою циклу for..in)
 */

function userObj(user) {
  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}

/*
 4. Створити об’єкт car (машина) з властивостями:
колір
модель
марка
об’єм двигуна
місткість (можлива кількість пасажирів)
поточна швидкість (speed)
максимальна можлива швидкість (maxSpeed) та методами:
accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину (ціле число) та додає до поточної швидкості (speed), але результат не має перевищувати максимально можливої швидкості для цієї машини
deaccelerate (зменшення швидкості): метод приймає ціле число (кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану, але результат не може бути від’ємним
stop (зупинка) - метод нічого не приймає, при виклику встановлює поточну швидкість (speed) рівною 0
*/

const car = {
  color: "red",
  model: "Toyota",
  brand: "Camry",
  engineVolume: 2.5,
  capacity: 5,
  speed: 0,
  maxSpeed: 200,

  accelerate(kmh) {
    this.speed += kmh;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  },
  deaccelerate(kmh) {
    this.speed -= kmh;
    if (this.speed < 0) {
      this.speed = 0;
    }
  },
  stop() {
    this.speed = 0;
  },
};

/*
5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. 
В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями
*/

function Car(color, model, brand, engineVolume, capacity, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.engineVolume = engineVolume;
  this.capacity = capacity;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
}

const car1 = new Car("red", "Toyota", "Camry", 3, 5, 200);
const car2 = new Car("black", "Jaguar", "E-paces", 2, 4, 250);
const car3 = new Car("white", "Mercedes-Benx", "190 sl", 1.9, 2, 180);
