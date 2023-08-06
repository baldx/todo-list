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
    const checkStatusDiv = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input")

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

    task.appendChild(checkStatusDiv);
    checkStatusDiv.classList.add("wrapper");

    checkStatusDiv.appendChild(label);
    label.setAttribute("for", "checkbox");
    label.innerHTML = "Status:"

    checkStatusDiv.appendChild(checkbox);
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", "checkbox")
    checkbox.setAttribute("id", "checkbox")
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDZDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzdCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQ2pHMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNtQjtBQUNOO0FBQ0c7QUFDQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrTW9kYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdE1vZGFsID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcclxuICAgIGBcclxuICAgIDxmb3JtIGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGl0bGVQcm9qZWN0XCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVByb2plY3RcIiBpZD1cInRpdGxlUHJvamVjdFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjIwXCIgdmFsdWU9XCJcIj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0UHJvamVjdFwiPkFkZCBwcm9qZWN0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgXHJcbiAgICBcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2RhbCgpOyIsImxldCBwcm9qZWN0TGlicmFyeSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb25zdHJ1Y3Rpb24gb2YgYSByb2JvdFwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRQcm9qZWN0XCIpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVQcm9qZWN0XCIpO1xyXG5cclxubGV0IGxvZ2ljID0gKCkgPT4ge1xyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50ID0+IHtcclxuICAgIGFkZFByb2plY3RUb0xpYnJhcnkoKTtcclxuICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcclxuIH0pXHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpYnJhcnkoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKVxyXG4gICAgcHJvamVjdExpYnJhcnkucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGFkZFRvTGlzdCgpXHJcbiAgICByZXNldEZvcm0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xpc3QoKSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIFxyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgYnRuLmlubmVySFRNTCA9IHRpdGxlSW5wdXQudmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naWMoKTsiLCJmdW5jdGlvbiB0YXNrTW9kYWwoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGZvcm0gaWQ9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrXCI+VGFzazo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgaWQ9XCJ0YXNrXCIgbWF4bGVuZ3RoPVwiMjBcIiBtaW5sZW5ndGg9XCIzXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cclxuXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgbWF4bGVuZ3RoPVwiMzBcIiB2YWx1ZT1cIlwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlXCIgaWQ9XCJkdWVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwcmlvcml0eS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGVnZW5kPlByaW9yaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJoaWdoXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIm1lZGl1bVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJsb3dcIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+XHJcbiAgICBcclxuICAgIDwvZm9ybT5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tNb2RhbCgpOyIsImNsYXNzIHRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCB0YXNrTGlicmFyeSA9IFtcclxuICAgIHtcclxuICAgICAgICB0YXNrOiBcIlRhc2tcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTb21lIGludGVyZXN0aW5nIHN0dWZmXCIsXHJcbiAgICAgICAgZHVlRGF0ZTogXCIwNi8wNC8yM1wiLFxyXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XHJcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZVwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcclxuXHJcbmxldCB0YXNrTG9naWMgPSAoKSA9PiB7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGFkZFRhc2tUb0xpYnJhcnkoKTtcclxuICAgICAgICBlbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGdldFByaW9yaXR5VmFsdWUoKSk7XHJcbiAgICB0YXNrTGlicmFyeS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgc2hvd1Rhc2soKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcmlvcml0eVZhbHVlKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJoaWdoXCIpIHJldHVybiBcIkhpZ2hcIjtcclxuICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWUgPT0gXCJtZWRpdW1cIikgcmV0dXJuIFwiTWVkaXVtXCI7XHJcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibG93XCIpIHJldHVybiBcIkxvd1wiO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Rhc2soKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzXCIpO1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBidG5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGNoZWNrU3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoYnRuUHJpb3JpdHkpO1xyXG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG4gICAgYnRuUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChnZXRQcmlvcml0eVZhbHVlKCkpXHJcbiAgICBidG5Qcmlvcml0eS5pbm5lckhUTUwgPSBnZXRQcmlvcml0eVZhbHVlKCk7XHJcblxyXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcblxyXG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XHJcbiAgICBkdWVEYXRlRGl2LmlubmVySFRNTCA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcclxuXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrU3RhdHVzRGl2KTtcclxuICAgIGNoZWNrU3RhdHVzRGl2LmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xyXG5cclxuICAgIGNoZWNrU3RhdHVzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgbGFiZWwuaW5uZXJIVE1MID0gXCJTdGF0dXM6XCJcclxuXHJcbiAgICBjaGVja1N0YXR1c0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcclxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja2JveFwiKVxyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja2JveFwiKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTG9naWMoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgcHJvamVjdE1vZGFsIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsXCI7XHJcbmltcG9ydCB0YXNrTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy90YXNrTW9kYWxcIjtcclxuaW1wb3J0IGxvZ2ljIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWNcIlxyXG5pbXBvcnQgdGFza0xvZ2ljIGZyb20gXCIuL21vZHVsZXMvdGFza01vZGFsTG9naWNcIlxyXG5cclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcclxuXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbn0pXHJcblxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KVxyXG5cclxuXHJcblxyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcblxyXG5wcmlvcml0eUJ0bi5mb3JFYWNoKGUgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJIaWdoXCIpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJMb3dcIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJMb3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5pbm5lckhUTUwgPT0gXCJMb3dcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIk1lZGl1bVwiKTtcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggZS5pbm5lckhUTUwgPT0gXCJNZWRpdW1cIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJNZWRpdW1cIilcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIkhpZ2hcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==