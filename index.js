// Завдання 1
const section = document.createElement('section');
section.setAttribute('id', 'root');
section.textContent = 'Це створений section.';
section.style.color = 'green';
document.body.appendChild(section);

// Завдання 2
const existingElement = document.getElementById('existingElement');

existingElement.style.backgroundColor = 'purple';
existingElement.style.color = 'white';

// Завдання 3
const userName = prompt('Введіть ваше ім’я:');

const greeting = document.createElement('h1');
greeting.textContent = `Вітаю, ${userName}`;
document.body.appendChild(greeting);
