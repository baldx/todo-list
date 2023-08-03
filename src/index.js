import projectModal from "./modules/projectModal";

const addProjectBtn = document.querySelector(".addProject");

addProjectBtn.addEventListener("click", () => {
    document.querySelector(".popUpProject").style.display = "block"
})

