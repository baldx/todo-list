import projectModal from "./modules/projectModal";
import logic from "./modules/projectModalLogic"

const addProjectBtn = document.querySelector(".addProject");

addProjectBtn.addEventListener("click", () => {
    document.querySelector(".popUpProject").style.display = "block"
    
})

