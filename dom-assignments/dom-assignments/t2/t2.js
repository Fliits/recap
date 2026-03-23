// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const todoListContainer = document.getElementsByTagName('ul');
todoList.forEach(item => {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'todo-' + item.id;
  checkbox.checked = item.completed;
  listItem.appendChild(checkbox);
  const taskLabel = document.createElement('label');
  taskLabel.htmlFor = 'todo-' + item.id;
  taskLabel.textContent = item.task;
  listItem.appendChild(taskLabel);
  todoListContainer[0].appendChild(listItem);
});
