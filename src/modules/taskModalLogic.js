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

function taskLogic() {
    submitBtn.addEventListener("click", element => {
        element.preventDefault();
        addTaskToLibrary();
    })
}

function addTaskToLibrary() {
    container.style.display = "none";
    let newTask = new task(taskInput.value, descriptionInput.value, dueDateInput.value, getPriorityValue());
    taskLibrary.push(newTask);
}


function getPriorityValue() {
    if (document.querySelector("input[name='priority']:checked").value == "yes") return true;
    else return false;
}

export default taskLogic();