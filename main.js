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

const inputCheck = document.querySelectorAll('.js-input');

handleClick =(ev) =>{
  const checked = ev.target;
  console.log(checked);

}

for (const item of inputCheck){
  item.addEventListener('click', handleClick);
  
}
 /* Duda donde meter el if ( si es la manejadora o en el handle) y si necesitamos un bucle para hacer el if dentro.*/
 // Una vez soucionado tendremos que hacer un map para modificar la clase y un classlist.add para añadir la clase de tachado

// const filterTask = tasks.filter((tasks) => tasks.completed == true);

