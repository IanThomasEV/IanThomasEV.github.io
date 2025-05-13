let tasks = [];

const setup = () => {
    document.getElementById("submit").addEventListener("click", vallideer);
    loadTasksFromStorage();
};

const vallideer = (event) => {
    event.preventDefault();

    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;
    const now = new Date();
    const time = now.toLocaleDateString("nl-BE") + " " + now.toLocaleTimeString("nl-BE", { hour: '2-digit', minute: '2-digit' });

    let task = {
        id: Date.now(),
        taskName,
        taskDescription,
        taskStatus: "todo",
        date: time,
    };

    tasks.push(task);
    saveTasksToStorage();
    renderTask(task);
};

const renderTask = (task) => {
    let taskItem = createElementWithClassName("div", "task");
    taskItem.id = "task-" + task.id;

    let taskItemName = createElementWithClassNameAndText("h3", "Task", task.taskName);
    let taskItemDescription = createElementWithClassNameAndText("p", "Description", task.taskDescription);
    let taskItemDateTime = createElementWithClassNameAndText("p", "DateTime", task.date);

    taskItem.appendChild(taskItemName);
    taskItem.appendChild(taskItemDescription);
    taskItem.appendChild(taskItemDateTime);
    taskItem.draggable = true;

    taskItem.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", task.id);
    });

    document.getElementById(task.taskStatus).appendChild(taskItem);
};

['todo', 'inprogress', 'done'].forEach(status => {
    const column = document.getElementById(status);
    column.addEventListener("dragover", e => e.preventDefault());
    column.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const taskElement = document.getElementById("task-" + id);
        column.appendChild(taskElement);


        const task = tasks.find(t => t.id == id);
        if (task) {
            task.taskStatus = status;
            saveTasksToStorage();
        }
    });
});

const saveTasksToStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasksFromStorage = () => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored);
        tasks.forEach(renderTask);
    }
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.appendChild(document.createTextNode(text));
    return e;
};

window.addEventListener("load", setup);
