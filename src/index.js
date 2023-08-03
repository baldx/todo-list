import addProject from "./modules/projectBtn";
import popUpModalTask from "./modules/modalTask";

addProject()

const createProject = document.querySelector(".add");

createProject.addEventListener("click", () => {
    popUpModalTask()
})