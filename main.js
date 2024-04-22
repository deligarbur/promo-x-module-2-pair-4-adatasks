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

// task es un objeto con la estrucuta { name: 'Recoger setas en el campo', completed: true }
// function renderTask(task) {
//   let li = "";
//   if (task.completed === true) {
//     li = `<li class="tachado">
//     <input type="checkbox">
//     ${task.name}
//     </li>`;
//   } else {
//     li = `<li>
//     <input type="checkbox">
//     ${task.name}
//     </li>`;
//   }
//   taskList.innerHTML = li;
// }




// const filterTask = tasks.filter((tasks) => tasks.completed == true);

