let listContainer = document.querySelector('.list-container');
showTask();

function addTask() {
    let task = document.querySelector('input').value;

    if (task.trim() !== '') {
        let ul = document.querySelector('#list'); // Ensure the correct selector
        if (ul) {
            let li = document.createElement('li');
            let input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('class', 'checker');
            input.setAttribute('onclick', 'completedTask(this)');
            let p = document.createElement('p');
            p.setAttribute('class', 'task');
            p.innerText = task;
            p.style.overflow = 'auto';
            let button = document.createElement('button');
            button.innerText = 'Remove Task';
            button.setAttribute('onclick', 'removeTask(this)');
            li.appendChild(input);
            li.appendChild(p);
            li.appendChild(button);
            ul.appendChild(li);
            document.querySelector('input').value = '';
            saveTask();
        } else {
            console.error('The ul element with id "list" was not found.');
        }
    }
}

function completedTask(checkbox) {
    let task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
    }
    saveTask();
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
    saveTask();
}

function saveTask() {
    try {
        localStorage.setItem('task', listContainer.innerHTML);
    } catch (e) {
        console.error('Error saving to localStorage', e);
    }
}

function showTask() {
    try {
        let tasks = localStorage.getItem('task');
        if (tasks) {
            listContainer.innerHTML = tasks;
        }
    } catch (e) {
        console.error('Error loading from localStorage', e);
    }
}