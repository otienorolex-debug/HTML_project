const Form=document.getElementById('create-task-form');

Form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        description: event.target['new-task-description'].value
    };

    buildToDo(task);
});

function buildToDo(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    document.getElementById('tasks').appendChild(listItem);
}