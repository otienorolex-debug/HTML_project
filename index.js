// Step 2: Select the form and add the submit event listener
const taskForm = document.getElementById('create-task-form');

taskForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Step 3: Handle form data using the input name "new-task-description"
    const taskDescription = event.target['new-task-description'].value;

    // Gather data into an object
    const taskObject = {
        description: taskDescription
    };

    // Call buildToDo and pass in the saved task object
    buildToDo(taskObject);

    // Optional: Clear the input field after submitting
    taskForm.reset();
});

// Step 4: Add item to list and display
function buildToDo(task) {
    // Create a new li element
    const listItem = document.createElement('li');

    // Add the task description as the textContent
    listItem.textContent = task.description;

    // Append the li element to the task list (id="tasks")
    const taskList = document.getElementById('tasks');
    taskList.appendChild(listItem);
}
