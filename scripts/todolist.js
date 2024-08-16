document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const addTaskButtonPomodoro = document.getElementById('AddTaskPomodoro');
    const addTaskInputPomodoro = document.getElementById('task-inputPomodoro');
    const taskCompleteSound = new Audio('assets/Sound effects/taskComplete_fart.mp3'); 
    const taskDeleteSound = new Audio('assets/Sound effects/taskDelete_cancelled.mp3'); 
    addTaskButton.addEventListener('click', () => DoAddTask('todo-list'));
    addTaskButtonPomodoro.addEventListener('click',() =>  {DoAddTask('pomodoro'); editView('titleButtonTodo-list'); addTaskInputPomodoro.value = "";});
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            DoAddTask('todo-list');
        }
    });
    addTaskInputPomodoro.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            DoAddTask('pomodoro');
            editView('titleButtonTodo-list');
            addTaskInputPomodoro.value = "";
        }
    });
    function DoAddTask(checker) {
        if (checker == 'todo-list') {
            const taskText = taskInput.value.trim();
            if (taskText === "") return;
            addTask(taskText);
        } 
        else if (checker == 'pomodoro') {
            const taskText = addTaskInputPomodoro.value.trim();
            if (taskText === "") return;
            addTask(taskText);
            showSection('todo-list');
        }
    }
    function addTask(tt) {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = tt;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
        const added= new Audio('assets/Sound effects/taskAdded.mp3');
        added.play();
    }

    function deleteTask(e) {
        const task = e.target.closest('li');
        task.remove();
        taskDeleteSound.play(); 
    }

    function toggleComplete(e) {
        const task = e.target.closest('li');
        task.classList.toggle('completed');
        taskCompleteSound.play();  
    }
});