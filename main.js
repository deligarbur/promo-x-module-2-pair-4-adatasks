'use script'

const taskList = document.querySelector('.js-task-list');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true, id: 1 },
  { name: 'Comprar pilas', completed: true, id: 2 },
  { name: 'Poner una lavadora de blancos', completed: true, id: 3 },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false, id: 4
  }
];

console.log(tasks);

const handleClick = (ev) => {
  const checkClick = parseInt(ev.target.id);
  const index = tasks.findIndex((item) => item.id === checkClick);
  tasks[index].completed = !tasks[index].completed;
  renderTasks(tasks);
}

const listener = () => {
  const checkbox = document.querySelectorAll('.js-input');
  for (const check of checkbox) {
    check.addEventListener('click', handleClick);
  }
}

const renderTasks = (array) => {
  taskList.innerHTML = '';
  array.forEach((item) => {
    if (item.completed === true) {
      taskList.innerHTML += `<li class="tachado js-li">
    <input checked type="checkbox" class="js-input" id="${item.id}">
    ${item.name}
    </li>`
    } else {
      taskList.innerHTML += `<li>
    <input type="checkbox" class="js-input" id="${item.id}">
    ${item.name}
    </li>`
    }
    listener();
  });
};

renderTasks(tasks);



// Filtrar tareas

const btnSearch = document.querySelector('.js-btn-filter');
const filterInput = document.querySelector('.js-text-task-filter');

handleSearch = (event) => {
  event.preventDefault();
  const valueInput = filterInput.value;
  taskList.innerHTML = '';
  const filteredSearch = tasks.filter((item) => item.name.toLowerCase().includes(valueInput.toLowerCase()));
  renderTasks(filteredSearch);
}


btnSearch.addEventListener('click', handleSearch);
