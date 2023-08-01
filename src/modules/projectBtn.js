const btnAdd = document.querySelector(".add");

class projectTitle {
    constructor(title) {
        this.title = title;
    }
}

const robot = new projectTitle()
robot.title = "Jimmy"

console.log(robot.title)

function addProject() {
   btnAdd.addEventListener("click", () => {
    console.log("test")
    }) 
}

export default addProject;
