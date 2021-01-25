const addButton = document.getElementById('addButton');
const inputTask = document.getElementById('newTask');
const list = document.getElementById('list');
const ul = document.getElementById('list');
const li = document.createElement('li');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  li.appendChild(document.createTextNode(inputTask.value));
  ul.appendChild(li);

  inputTask.value = '';
  //   inputTask.className = 'show';
  //   addButton.className = 'hidden';
});
