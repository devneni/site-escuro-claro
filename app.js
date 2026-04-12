const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    let className = document.body.className;

    if (className === "light-theme") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }

    console.log("current class name: " + className);
});


const addTaskBtn = document.getElementById('addTask');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
});

newTaskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});