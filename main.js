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
function renderTask(tasks) {
    taskList.innerHTML += `
 <li>
 ${tasks}
    </li>` ;
   
}
 
  renderTask();
  