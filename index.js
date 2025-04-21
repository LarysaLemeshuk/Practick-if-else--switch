const form = document.querySelector('#todo-form');
const list = document.querySelector('#todo-list');
let taskCount = 0;

form.addEventListener('submit', addItem);

function addItem(event) {
  event.preventDefault();

  if (taskCount === 10) {
    alert('Ми досягли максимальної кількості завдань');
    return;
  }

  const { target } = event;
  const [todoInput] = target;
  const value = todoInput.value.trim();

  if (value === '') {
    alert('Текст завдання не може бути порожньою стрічкою');
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = value;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'remove task';
  deleteBtn.classList.add('remove-btn');
  deleteBtn.addEventListener('click', deleteHandler);

  li.append(checkbox, taskText, deleteBtn);
  list.append(li);

  taskCount++;
  form.reset();
}

function deleteHandler(event) {
  const li = event.target.parentNode;
  li.remove();
  taskCount--;
}