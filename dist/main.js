/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/projectModal.js":
/*!*************************************!*\
  !*** ./src/modules/projectModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectModal = (() => {
    const container = document.querySelector(".popUpProject");

    container.innerHTML = 
    `
    <form id="project" name="project">
    <label for="titleProject">Title:</label>
    <input type="text" name="titleProject" id="titleProject" required maxlength="20" value="">
    <button type="submit" class="submitProject">Add project</button>
    </form>
    `
    
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal());

/***/ }),

/***/ "./src/modules/projectModalLogic.js":
/*!******************************************!*\
  !*** ./src/modules/projectModalLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let projectLibrary = [
    {
        title: "Construction of a robot"
    }
]

class project {
    constructor(title) {
        this.title = title
    }
}

const submitBtn = document.querySelector(".submitProject");
const container = document.querySelector(".popUpProject");
const titleInput = document.querySelector("#titleProject");

let logic = () => {
    submitBtn.addEventListener("click", element => {
    addProjectToLibrary();
    element.preventDefault();
 })
}   

function addProjectToLibrary() {
    container.style.display = "none";
    let newProject = new project(titleInput.value)
    projectLibrary.push(newProject);
    addToList()
    resetForm()
}

function resetForm() {
    titleInput.value = ""
}

function addToList() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    ul.appendChild(li);
    li.appendChild(btn)
    btn.innerHTML = titleInput.value
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logic());

/***/ }),

/***/ "./src/modules/taskModal.js":
/*!**********************************!*\
  !*** ./src/modules/taskModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taskModal() {
    const container = document.querySelector(".popUpTask");

    container.innerHTML = `
    <form id="modal">
        <label for="task">Task:</label>
        <input type="text" name="task" id="task" maxlength="20" minlength="3" value="" required>

        <label for="description">Description:</label>
        <input type="text" name="description" id="description" maxlength="30" value="">

        <label for="due">Due date:</label>
        <input type="date" name="due" id="due" value="" required>

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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModal());

/***/ }),

/***/ "./src/modules/taskModalLogic.js":
/*!***************************************!*\
  !*** ./src/modules/taskModalLogic.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        priority: "High"
    }
]

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");

const container = document.querySelector(".popUpTask");
const submitBtn = document.querySelector(".submit");

let taskLogic = () => {
    submitBtn.addEventListener("click", element => {
        rules()
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

function rules() {
    if (taskInput.value == null || dueDateInput.value == null || getPriorityValue() == null) {
        alert("test");
        resetForm()
    }
    else if (taskInput.value == "" || dueDateInput.value == "" || getPriorityValue() == "") alert("test")
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
}


function showTask() {
    const container = document.querySelector("#tasks");
    const task = document.createElement("div");
    const btnPriority = document.createElement("button");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const dueDateDiv = document.createElement("div");
    const checkBtn = document.createElement("button");

    container.appendChild(task);
    task.classList.add("task");

    task.appendChild(btnPriority);
    btnPriority.classList.add("priority");
    btnPriority.classList.add(getPriorityValue())
    btnPriority.innerHTML = getPriorityValue();

    task.appendChild(titleDiv);
    titleDiv.innerHTML = taskInput.value;
    titleDiv.classList.add("title");

    task.appendChild(descriptionDiv);
    descriptionDiv.innerHTML = descriptionInput.value;
    descriptionDiv.classList.add("description");

    task.appendChild(dueDateDiv);
    dueDateDiv.innerHTML = dueDateInput.value;
    dueDateDiv.classList.add("due");

    task.appendChild(checkBtn);
    checkBtn.innerHTML = "Undone"
    checkBtn.classList.add("check");
    checkBtn.classList.add("UnDone")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskLogic());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_projectModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectModal */ "./src/modules/projectModal.js");
/* harmony import */ var _modules_taskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskModal */ "./src/modules/taskModal.js");
/* harmony import */ var _modules_projectModalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectModalLogic */ "./src/modules/projectModalLogic.js");
/* harmony import */ var _modules_taskModalLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskModalLogic */ "./src/modules/taskModalLogic.js");






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
            e.classList.remove("High");
            e.classList.add("Low");
            e.innerHTML = "Low";
        }
        else if (e.innerHTML == "Low") {
            e.classList.remove("Low");
            e.classList.add("Medium");
            e.innerHTML = "Medium";
        }
        else if ( e.innerHTML == "Medium") {
            e.classList.remove("Medium")
            e.classList.add("High");
            e.innerHTML = "High"
        }
    })
});

const status = document.querySelectorAll(".check");

status.forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML == "Done") {
            e.classList.remove("Done");
            e.classList.add("UnDone");
            e.innerHTML = "Undone"
        }
        else if (e.innerHTML == "Undone") {
            e.classList.remove("UnDone");
            e.classList.add("Done");
            e.innerHTML = "Done";
        }
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDZDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzdCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQ2pHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNtQjtBQUNOO0FBQ0c7QUFDQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIik7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFxyXG4gICAgYFxyXG4gICAgPGZvcm0gaWQ9XCJwcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVByb2plY3RcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlUHJvamVjdFwiIGlkPVwidGl0bGVQcm9qZWN0XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMjBcIiB2YWx1ZT1cIlwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRQcm9qZWN0XCI+QWRkIHByb2plY3Q8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIGBcclxuICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsKCk7IiwibGV0IHByb2plY3RMaWJyYXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbnN0cnVjdGlvbiBvZiBhIHJvYm90XCJcclxuICAgIH1cclxuXVxyXG5cclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFByb2plY3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVByb2plY3RcIik7XHJcblxyXG5sZXQgbG9naWMgPSAoKSA9PiB7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xyXG4gICAgYWRkUHJvamVjdFRvTGlicmFyeSgpO1xyXG4gICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSlcclxufSAgIFxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlicmFyeSgpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICBwcm9qZWN0TGlicmFyeS5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgYWRkVG9MaXN0KClcclxuICAgIHJlc2V0Rm9ybSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCgpIHtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgXHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChidG4pXHJcbiAgICBidG4uaW5uZXJIVE1MID0gdGl0bGVJbnB1dC52YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpYygpOyIsImZ1bmN0aW9uIHRhc2tNb2RhbCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8Zm9ybSBpZD1cIm1vZGFsXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tcIj5UYXNrOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiBpZD1cInRhc2tcIiBtYXhsZW5ndGg9XCIyMFwiIG1pbmxlbmd0aD1cIjNcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBtYXhsZW5ndGg9XCIzMFwiIHZhbHVlPVwiXCI+XHJcblxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVcIiBpZD1cImR1ZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XHJcblxyXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInByaW9yaXR5LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+UHJpb3JpdHk6PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwibWVkaXVtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgPC9mb3JtPmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza01vZGFsKCk7IiwiY2xhc3MgdGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHRhc2tMaWJyYXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRhc2s6IFwiVGFza1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgaW50ZXJlc3Rpbmcgc3R1ZmZcIixcclxuICAgICAgICBkdWVEYXRlOiBcIjA2LzA0LzIzXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcclxuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIik7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xyXG5cclxubGV0IHRhc2tMb2dpYyA9ICgpID0+IHtcclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcnVsZXMoKVxyXG4gICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoKTtcclxuICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGdldFByaW9yaXR5VmFsdWUoKSk7XHJcbiAgICB0YXNrTGlicmFyeS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgc2hvd1Rhc2soKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydWxlcygpIHtcclxuICAgIGlmICh0YXNrSW5wdXQudmFsdWUgPT0gbnVsbCB8fCBkdWVEYXRlSW5wdXQudmFsdWUgPT0gbnVsbCB8fCBnZXRQcmlvcml0eVZhbHVlKCkgPT0gbnVsbCkge1xyXG4gICAgICAgIGFsZXJ0KFwidGVzdFwiKTtcclxuICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFza0lucHV0LnZhbHVlID09IFwiXCIgfHwgZHVlRGF0ZUlucHV0LnZhbHVlID09IFwiXCIgfHwgZ2V0UHJpb3JpdHlWYWx1ZSgpID09IFwiXCIpIGFsZXJ0KFwidGVzdFwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcmlvcml0eVZhbHVlKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJoaWdoXCIpIHJldHVybiBcIkhpZ2hcIjtcclxuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJtZWRpdW1cIikgcmV0dXJuIFwiTWVkaXVtXCI7XHJcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibG93XCIpIHJldHVybiBcIkxvd1wiO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Rhc2soKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidG5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoYnRuUHJpb3JpdHkpO1xyXG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChnZXRQcmlvcml0eVZhbHVlKCkpXHJcbiAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBnZXRQcmlvcml0eVZhbHVlKCk7XHJcblxyXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcblxyXG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XHJcbiAgICBkdWVEYXRlRGl2LmlubmVySFRNTCA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcclxuXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcclxuICAgIGNoZWNrQnRuLmlubmVySFRNTCA9IFwiVW5kb25lXCJcclxuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcclxuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJVbkRvbmVcIilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza0xvZ2ljKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbFwiO1xyXG5pbXBvcnQgdGFza01vZGFsIGZyb20gXCIuL21vZHVsZXMvdGFza01vZGFsXCI7XHJcbmltcG9ydCBsb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljXCJcclxuaW1wb3J0IHRhc2tMb2dpYyBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljXCJcclxuXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIik7XHJcblxyXG5cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG59KVxyXG5cclxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSlcclxuXHJcblxyXG5cclxuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5XCIpO1xyXG5cclxucHJpb3JpdHlCdG4uZm9yRWFjaChlID0+IHtcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZS5pbm5lckhUTUwgPT0gXCJIaWdoXCIpIHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaFwiKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiTG93XCIpO1xyXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiTG93XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUuaW5uZXJIVE1MID09IFwiTG93XCIpIHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiTG93XCIpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJNZWRpdW1cIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGUuaW5uZXJIVE1MID09IFwiTWVkaXVtXCIpIHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiTWVkaXVtXCIpXHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIkhpZ2hcIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJIaWdoXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tcIik7XHJcblxyXG5zdGF0dXMuZm9yRWFjaChlID0+IHtcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoZS5pbm5lckhUTUwgPT0gXCJEb25lXCIpIHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiRG9uZVwiKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiVW5Eb25lXCIpO1xyXG4gICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiVW5kb25lXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5pbm5lckhUTUwgPT0gXCJVbmRvbmVcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJVbkRvbmVcIik7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIkRvbmVcIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJEb25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=