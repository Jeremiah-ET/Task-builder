const taskInput = document.getElementById('task_input');
const taskList = document.getElementById('task_list');
const submitButton = document.getElementById('submit_button');
const recommendationButton = document.getElementById("recommendations_button");
const rightSide = document.getElementById("right_input_side");
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

// This is the recomendation button when you press it you get reccomendations and there is a go back button to go back to were it was
// Something to code is a use button where it takes the suggestion and then it uses it
recommendationButton.addEventListener("click", function() {
  recommendationButton.remove();
  const recommendationsList = document.createElement("p");
  recommendationsList.id = "ReccomendationsId";
  recommendationsList.innerHTML = "Suggestion: I need to finish my homework <br> Suggestion: I want to read one book <br> Suggestion: I need to walk my dog";
  rightSide.append(recommendationsList);
  const returnButton = document.createElement("button");
  returnButton.id = "returnId"
  returnButton.textContent = "Go Back"
  rightSide.append(returnButton);

  returnButton.addEventListener("click", function(){
  recommendationsList.remove();
  returnButton.remove();
  rightSide.append(recommendationButton)
  })
})
