'use script'

const taskList = document.querySelector('.js-task-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true, id:'1' },
    { name: 'Comprar pilas', completed: true, id:'2' },
    { name: 'Poner una lavadora de blancos', completed: true, id:'3' },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false, id:'4',
    }
];

console.log(tasks);

const handleClick = (ev) =>{
  const checkClick = ev.currentTarget;
  
  const index = tasks.findIndex((item) => item.id === checkClick )
  tasks[index].completed =  !tasks[index].completed;
  console.log(index);
}

const listener = () =>{
  const checkbox = document.querySelectorAll('.js-input');
  for (const check of checkbox) {
    check.addEventListener('click',handleClick);    
  }

}

const renderTasks = (array) => {
  taskList.innerHTML = '';
  array.forEach((item) => {
    if(item.completed === true){
      taskList.innerHTML += `<li class="tachado js-li">
    <input checked type="checkbox" class="js-input">
    ${item.name}
    </li>`
    }else{
      taskList.innerHTML += `<li>
    <input type="checkbox" class="js-input">
    ${item.name}
    </li>`
    }
    listener ();
  });
};

renderTasks(tasks);

// const inputCheck = document.querySelectorAll('.js-input');


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
