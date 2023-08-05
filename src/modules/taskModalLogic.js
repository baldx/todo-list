class task {
    constructor(task, description, dueDate, priority) {
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let taskLibrary = [
    {
        task: "Task",
        description: "Some interesting stuff",
        dueDate: "06/04/23",
        priority: "high"
    }
]

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");

const container = document.querySelector(".popUpTask");
const submitBtn = document.querySelector(".submit");
const priorityBtn = document.querySelectorAll(".priority");

let taskLogic = () => {
    submitBtn.addEventListener("click", element => {
        addTaskToLibrary();
        element.preventDefault();
    })
}

function addTaskToLibrary() {
    container.style.display = "none";
    let newTask = new task(taskInput.value, descriptionInput.value, dueDateInput.value, getPriorityValue());
    taskLibrary.push(newTask);
    showTask();
    resetForm();
}

function resetForm() {
    taskInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
}

function getPriorityValue() {
    if (document.querySelector("input[name='priority']:checked").value == "high") return "High";
    else if (document.querySelector("input[name='priority']:checked").value == "medium") return "Medium";
    else if (document.querySelector("input[name='priority']:checked").value == "low") return "Low";
    else return false;
}

function showTask() {
    const container = document.querySelector("#tasks");

    container.innerHTML += `
    <div class="task">
        <button class="priority ${getPriorityValue()}">${getPriorityValue()}</button>
        <div class="title">${taskInput.value}</div>
        <div class="description">${descriptionInput.value}</div>
        <div class="due">${dueDateInput.value}</div>
        <button class="check UnDone">Undone</button>
</div>`
}

export default taskLogic();