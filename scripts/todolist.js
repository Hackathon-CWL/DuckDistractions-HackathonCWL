document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    const taskCompleteSound = new Audio('assets/Sound effects/taskComplete_fart.mp3'); 
    const taskDeleteSound = new Audio('assets/Sound effects/taskDelete_cancelled.mp3'); 

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

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