const listEL = document.querySelector('.task_list');
const task = document.querySelector('#entered_task');

function addTask(){
    if(task.value == ''){
        alert("Please enter a task");
    }else{
    
        const li = document.createElement('li');
        const button = document.createElement('button');

        li.innerHTML = `
        <p>${task.value}</p>
        <span>
            <button class='edit'>Edit</button>
            <button class='delete'>Delete</button>
        </span>
        `;

        listEL.append(li);
        task.value = '';

        attachEventListeners(li);
    }
}

function attachEventListeners(li) {
    const edit = li.querySelector('.edit');
    const del = li.querySelector('.delete');
    const p = li.querySelector('p');

    del.addEventListener('click', () => {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
        }
    });

    edit.addEventListener('click', () => {
        const newTask = prompt("Edit task:");
        if (newTask !== null) {
            li.innerHTML = `
            <p>${newTask}</p>
            <span>
                <button class='edit'>Edit</button>
                <button class='delete'>Delete</button>
            </span>
            `;
            p.style.textDecoration = 'none'; 
            attachEventListeners(li); // Reattach event listeners after editing
        }
    });

    li.addEventListener('click', () => {
        if (p.style.textDecoration === 'line-through') {
            p.style.textDecoration = 'none';
        } else {
            p.style.textDecoration = 'line-through';
        }
    });
}