import addProject from "./modules/projectBtn";
import popUpModal from "./modules/modal";

addProject()

const createProject = document.querySelector(".add");

createProject.addEventListener("click", () => {
    popUpModal()
})