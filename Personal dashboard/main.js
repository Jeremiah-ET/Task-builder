const taskInput = document.getElementById('task_input');
const taskList = document.getElementById('task_list');
const submitButton = document.getElementById('submit_button');
const listStarter = document.getElementById('list_starter');

submitButton.addEventListener('click', () => {
  const value = taskInput.value.trim();
  if (!value) {
    // Remove any existing “no task” message before adding a fresh one
    const existing = taskList.querySelector('.no-task');
    if (existing) existing.remove();

    const msg = document.createElement('li');
    msg.className = 'no-task';
    msg.textContent = 'No task was submitted.';
    taskList.appendChild(msg);
    return;
  }

  if(value) {
    listStarter.remove();
  }

  const final_value = value.charAt(0).toUpperCase() + value.slice(1);

  const li = document.createElement('li');
  li.textContent = `The task you picked is: ${final_value}`;
  taskList.appendChild(li);
  taskInput.value = '';
});