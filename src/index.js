import { add } from "date-fns";
import projectModal from "./modules/projectModal";
import taskModal from "./modules/taskModal";
import logic from "./modules/projectModalLogic"

const addProjectBtn = document.querySelector(".addProject");
const addTaskBtn = document.querySelector(".addTask");

addProjectBtn.addEventListener("click", () => {
    document.querySelector(".popUpProject").style.display = "block"
})

addTaskBtn.addEventListener("click", () => {
    document.querySelector(".popUpTask").style.display = "block";
})
