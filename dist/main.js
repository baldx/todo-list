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
            <input type="radio" name="priority" id="high" value="yes" required>
            <label for="priority">High</label>
            <input type="radio" name="priority" id="medium" value="yes" required>
            <label for="priority">Medium</label>
            <input type="radio" name="priority" id="low" value="yes" required>
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
        priority: "high"
    }
]

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");
const container = document.querySelector(".popUpTask");
const submitBtn = document.querySelector(".submit");

function taskLogic() {
    submitBtn.addEventListener("click", element => {
        element.preventDefault();
        addTaskToLibrary();
    })
}

function addTaskToLibrary() {
    container.style.display = "none";
    let newTask = new task(taskInput.value, descriptionInput.value, dueDateInput.value, getPriorityValue());
    taskLibrary.push(newTask);
}


function getPriorityValue() {
    if (document.querySelector("input[name='priority']:checked").value == "yes") return true;
    else return false;
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDZDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzdCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQzNDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNtQjtBQUNOO0FBQ0c7QUFDQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrTW9kYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdE1vZGFsID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcclxuICAgIGBcclxuICAgIDxmb3JtIGlkPVwicHJvamVjdFwiIG5hbWU9XCJwcm9qZWN0XCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidGl0bGVQcm9qZWN0XCI+VGl0bGU6PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVByb2plY3RcIiBpZD1cInRpdGxlUHJvamVjdFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjIwXCIgdmFsdWU9XCJcIj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0UHJvamVjdFwiPkFkZCBwcm9qZWN0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgXHJcbiAgICBcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2RhbCgpOyIsImxldCBwcm9qZWN0TGlicmFyeSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJDb25zdHJ1Y3Rpb24gb2YgYSByb2JvdFwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRQcm9qZWN0XCIpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVQcm9qZWN0XCIpO1xyXG5cclxubGV0IGxvZ2ljID0gKCkgPT4ge1xyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50ID0+IHtcclxuICAgIGFkZFByb2plY3RUb0xpYnJhcnkoKTtcclxuICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcclxuIH0pXHJcbn0gICBcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RUb0xpYnJhcnkoKSB7XHJcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKVxyXG4gICAgcHJvamVjdExpYnJhcnkucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGFkZFRvTGlzdCgpXHJcbiAgICByZXNldEZvcm0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xpc3QoKSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIFxyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgYnRuLmlubmVySFRNTCA9IHRpdGxlSW5wdXQudmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naWMoKTsiLCJmdW5jdGlvbiB0YXNrTW9kYWwoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGZvcm0gaWQ9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrXCI+VGFzazo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgaWQ9XCJ0YXNrXCIgbWF4bGVuZ3RoPVwiMjBcIiBtaW5sZW5ndGg9XCIzXCIgdmFsdWU9XCJcIiByZXF1aXJlZD5cclxuXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgbWF4bGVuZ3RoPVwiMzBcIiB2YWx1ZT1cIlwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlXCIgaWQ9XCJkdWVcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwcmlvcml0eS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGVnZW5kPlByaW9yaXR5OjwvbGVnZW5kPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJoaWdoXCIgdmFsdWU9XCJ5ZXNcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwieWVzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwieWVzXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgPC9mb3JtPmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza01vZGFsKCk7IiwiY2xhc3MgdGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHRhc2tMaWJyYXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRhc2s6IFwiVGFza1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgaW50ZXJlc3Rpbmcgc3R1ZmZcIixcclxuICAgICAgICBkdWVEYXRlOiBcIjA2LzA0LzIzXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcclxuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG5mdW5jdGlvbiB0YXNrTG9naWMoKSB7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRUYXNrVG9MaWJyYXJ5KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9MaWJyYXJ5KCkge1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IHRhc2sodGFza0lucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIGdldFByaW9yaXR5VmFsdWUoKSk7XHJcbiAgICB0YXNrTGlicmFyeS5wdXNoKG5ld1Rhc2spO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlWYWx1ZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwieWVzXCIpIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tMb2dpYygpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBwcm9qZWN0TW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TW9kYWxcIjtcclxuaW1wb3J0IHRhc2tNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tNb2RhbFwiO1xyXG5pbXBvcnQgbG9naWMgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TW9kYWxMb2dpY1wiXHJcbmltcG9ydCB0YXNrTG9naWMgZnJvbSBcIi4vbW9kdWxlcy90YXNrTW9kYWxMb2dpY1wiXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xyXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xyXG5cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG59KVxyXG5cclxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==