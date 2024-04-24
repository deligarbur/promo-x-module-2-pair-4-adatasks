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
    if(item.completed === true){
      taskList.innerHTML += `<li class="tachado">
    <input checked type="checkbox" class="js-input">
    ${item.name}
    </li>`
    }else{
      taskList.innerHTML += `<li>
    <input type="checkbox" class="js-input">
    ${item.name}
    </li>`
    }
    
  });
};

renderTasks(tasks);

// const inputCheck = document.querySelectorAll('.js-input');


handleClick =(ev) =>{
  const checked = ev.target;
  for (const itemcheked of tasks) {
    
  }

}

taskList.addEventListener('click', handleClick);
  

 /* Duda donde meter el if ( si es la manejadora o en el handle) y si necesitamos un bucle para hacer el if dentro.*/
 // Una vez soucionado tendremos que hacer un map para modificar la clase y un classlist.add para añadir la clase de tachado

// const filterTask = tasks.filter((tasks) => tasks.completed == true);

// Filtrar tareas

const btnSearch = document.querySelector('.js-btn-filter');
const filterInput = document.querySelector('.js-text-task-filter');

handleSearch = () => {
  const valueInput = filterInput.value;
  taskList.innerHTML = '';
//   for (const iterator of object) {
    
//   }
}


btnSearch.addEventListener('click', handleSearch);
