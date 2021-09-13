let taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();//to stop automatic submissions
    let inputEl = document.querySelector('#input-task');
    let task = inputEl.value;

    //localStorage.setItem('tasks',task);

    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);

    console.log(taskList);

    //localStorage.setItem('tasks',taskList);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayList();

});


//displayList

let displayList = () => {
    let taskListEl = document.querySelector('#task-list');

    let inputEl = document.querySelector('#input-task');

    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    let eachRow = '';

    for (let task of taskList) {
        eachRow += `<li class="list-group-item list-group-item-warning list-group-item-action">
                <span class="font-weight-bold">${task}</span>
                <button class="close">
                 <i class="fa fa-window-close"></i>
                </button>
                </li>`;
    }

    taskListEl.innerHTML = eachRow;


}