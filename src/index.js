import { add } from "date-fns";
import projectModal from "./modules/projectModal";
import taskModal from "./modules/taskModal";
import logic from "./modules/projectModalLogic"
import taskLogic from "./modules/taskModalLogic"

const addProjectBtn = document.querySelector(".addProject");
const addTaskBtn = document.querySelector(".addTask");


addProjectBtn.addEventListener("click", () => {
    document.querySelector(".popUpProject").style.display = "block"
})

addTaskBtn.addEventListener("click", () => {
    document.querySelector(".popUpTask").style.display = "block";
})



const priorityBtn = document.querySelectorAll(".priority");

priorityBtn.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "High") {
            e.classList.remove("high");
            e.classList.add("low");
            e.innerHTML = "Low";
        }
        else if (e.innerHTML == "Low") {
            e.classList.remove("low");
            e.classList.add("medium");
            e.innerHTML = "Medium";
        }
        else if ( e.innerHTML == "Medium") {
            e.classList.remove("medium")
            e.classList.add("high");
            e.innerHTML = "High"
        }
    })
});

const status = document.querySelectorAll(".check");

status.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "Done") {
            e.classList.remove("done");
            e.classList.add("unDone");
            e.innerHTML = "Undone"
        }
        else if (e.innerHTML == "Undone") {
            e.classList.remove("unDone");
            e.classList.add("done");
            e.innerHTML = "Done";
        }
    })
})