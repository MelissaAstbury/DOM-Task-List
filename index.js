const addTask = document.getElementById('addTask');
const inputTask = document.getElementById('newTask');
const ul = document.getElementById('list');
const listEl = document.getElementById('list').getElementsByTagName('label');
const listCheckEl = document
  .getElementById('list')
  .getElementsByTagName('input');
let inputCount = document.getElementById('list').getElementsByTagName('input')
  .length;

addTask.addEventListener('click', (e) => {
  const label = document.createElement('label');
  const input = document.createElement('input');
  const lineBreak = document.createElement('br');

  e.preventDefault();
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', inputCount + 1);
  input.setAttribute('id', inputCount + 1);
  input.setAttribute('value', inputTask.value);

  input.appendChild(document.createTextNode(inputTask.value));
  ul.appendChild(input);

  label.setAttribute('for', inputCount + 1);
  label.appendChild(document.createTextNode(inputTask.value));
  ul.appendChild(label);
  ul.appendChild(lineBreak);

  inputTask.value = '';
  inputCount++;
});

for (i = 0; i < listEl.length; i++) {
  listEl[i].addEventListener('click', (e) => {
    if (e.target.className != 'checked') {
      e.target.className = 'checked';
    } else {
      e.target.className = '';
    }
  });
}

const listEl = document.getElementById('list').getElementsByTagName('label');

for (i = 0; i < listEl.length; i++) {
  listEl[i].addEventListener('click', (e) => {
    if (e.target.className != 'checked') {
      e.target.className = 'checked';
    } else {
      e.target.className = '';
    }
  });
}
