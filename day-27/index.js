const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const dueDate = document.getElementById('due-date');
const taskList = document.getElementById('task-list');
document.addEventListener('DOMContentLoaded', () => {
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskTitle.value, taskDescription.value, dueDate.value);
    taskTitle.value = '';
    taskDescription.value = '';
    dueDate.value = '';
  });
});

function addTask(title, description, dueDate) {
    if (title.trim() === '') return;

    const tr = document.createElement('tr');
    tr.className = 'border-b';

    tr.innerHTML = `
        <td class="py-2">${title}</td>
        <td class="py-2">${description}</td>
        <td class="py-2">${dueDate}</td>
        <td class="py-2">
            <button class="edit-task bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
            <button class="delete-task bg-red-500 text-white p-1 rounded">Delete</button>
        </td>
    `;

    taskList.appendChild(tr);

    tr.querySelector('.edit-task').addEventListener('click', () => {
        const newTitle = prompt('Edit your task title', title);
        const newDescription = prompt('Edit your task description', description);
        const newDueDate = prompt('Edit your task due date', dueDate);
        if (newTitle !== null && newTitle.trim() !== '') {
            tr.querySelector('td:nth-child(1)').textContent = newTitle;
        }
        if (newDescription !== null && newDescription.trim() !== '') {
            tr.querySelector('td:nth-child(2)').textContent = newDescription;
        }
        if (newDueDate !== null && newDueDate.trim() !== '') {
            tr.querySelector('td:nth-child(3)').textContent = newDueDate;
        }
    });

    tr.querySelector('.delete-task').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this task?')) {
            tr.remove();
        }
    });
}

