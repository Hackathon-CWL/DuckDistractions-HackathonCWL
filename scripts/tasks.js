document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('pomodoroTask-form');
    const taskList = document.getElementById('pomodoroTask-list');
    
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const taskName = document.getElementById('pomodoroTask-name').value;
      const pomodoroCount = document.getElementById('pomodoro-count').value;
      
      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.className = 'pomodoroTask-item';
      
      taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskName} - ${pomodoroCount} Pomodoros</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      
      taskList.appendChild(taskItem);
      
      // Reset the form
      taskForm.reset();
    });
    
    taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
      }
      
      if (e.target.classList.contains('edit')) {
        const taskItem = e.target.parentElement;
        const taskName = taskItem.querySelector('span').textContent.split(' - ')[0];
        const pomodoroCount = taskItem.querySelector('span').textContent.split(' - ')[1].split(' ')[0];
        
        document.getElementById('pomodoroTask-name').value = taskName;
        document.getElementById('pomodoro-count').value = pomodoroCount;
        
        taskItem.remove();
      }
      
      if (e.target.type === 'checkbox') {
        e.target.nextElementSibling.classList.toggle('completed');
      }
    });
  });
  