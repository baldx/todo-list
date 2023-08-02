let projectLibrary = [
    {
        title: "Construction of a robot" 
    },
    {
        title: "Construction of a robot" 
    },
    {
        title: "Construction of a robot" 
    }
]

class project {
    constructor(title) {
        this.title = title;
    }
}

function popUpModal() {
    const container = document.querySelector(".popUp");

    container.innerHTML += `<form id="modal">
    <label for="task">Task:</label>
    <input type="text" name="task" id="task" maxlength="20" minlength="3" required>

    <label for="description">Description:</label>
    <input type="text" name="description" id="description" maxlength="30">

    <label for="due">Due date:</label>
    <input type="date" name="due" id="due" required>

    <fieldset class="priority-group">
        <legend>Priority:</legend>
        <input type="radio" name="priority" id="high" value="high" required>
        <label for="priority">High</label>
        <input type="radio" name="priority" id="medium" value="medium" required>
        <label for="priority">Medium</label>
        <input type="radio" name="priority" id="low" value="low" required>
        <label for="priority">Low</label>
    </fieldset>
    
    <button type="submit" class="submit">Add Project</button>
    
</form>`
container.style.display = "block";

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", element => {
    addProjectToList();
    element.preventDefault();
})

function addProjectToList() {
    container.style.display = "none";
    let newProject = new project(title.value)
    project.push(newProject);
}

function createProject() {

}

};

export default popUpModal;