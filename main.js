'use script'

const taskList = document.querySelector('.js-task-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    }
];

console.log(tasks);


const renderTasks = (array) => {
  taskList.innerHTML = '';
  array.forEach((item) => {
    //meter if aqui
    taskList.innerHTML += `<li>
    <input type="checkbox">
    ${item.name}
    </li>`
  });
};

renderTasks(tasks);


const filterTask = tasks.filter((tasks) => tasks.completed == true);
console.log(filterTask);



// function filterTasks() {
//   if (tasks.completed === true) {
//     taskList.classList.add('tachado');
//   }
// };

// filterTasks();