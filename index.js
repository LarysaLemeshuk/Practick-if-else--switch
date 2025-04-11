const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', showAlert);

function showAlert() {
  alert('Привіт тобі, клацальщик!');
}

const createBtnLink = document.getElementById('createBtnLink');

const newButtonContainer = document.getElementById('newButtonContainer');

createBtnLink.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault(newButtonContainer);

  const newBtn = document.createElement('button');
  newBtn.textContent = 'Нова кнопка';
  newButtonContainer.appendChild(newBtn);
}

const lamp = document.getElementById('lamp');
const lampToggle = document.getElementById('lampToggle');

lampToggle.addEventListener('click', onLamp);

function onLamp() {
  lamp.style.backgroundColor = 'yellow';
  lamp.style.borderColor = 'white';
}
