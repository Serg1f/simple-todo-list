let list = document.querySelector('.todo-list');
let items = list.children;
let emptyListMessage = document.querySelector('.empty-tasks');
let newItemForm = document.querySelector('.add-form');
let newItemTitle = newItemForm.querySelector('.add-form-input');
let taskTemplate = document.querySelector('#task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo-list-item');

let toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  }else {
    emptyListMessage.classList.add('hidden');
  }
};

let addCheckHandler = function (item) {
  let checkbox = item.querySelector('.todo-list-input');
  checkbox.onchange = function () {
    item.remove();
    toggleEmptyListMessage();
  };
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.onsubmit = function (evt) {
  evt.preventDefault();

  let taskText = newItemTitle.value;
  let task = newItemTemplate.cloneNode(true);
  let taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText;
  addCheckHandler(task);
  list.appendChild(task);
  toggleEmptyListMessage();
  newItemTitle.value = '';
};
