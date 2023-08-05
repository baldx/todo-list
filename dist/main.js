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
        priority: "high"
    }
]

const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#due");

const container = document.querySelector(".popUpTask");
const submitBtn = document.querySelector(".submit");
const priorityBtn = document.querySelectorAll(".priority");

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
    else return false;
}

function showTask() {
    const container = document.querySelector("#tasks");

    container.innerHTML += `
    <div class="task">
        <button class="priority ${getPriorityValue()}">${getPriorityValue()}</button>
        <div class="title">${taskInput.value}</div>
        <div class="description">${descriptionInput.value}</div>
        <div class="due">${dueDateInput.value}</div>
        <button class="check UnDone">Undone</button>
</div>`
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
            e.classList.remove("unDone");
            e.classList.add("done");
            e.innerHTML = "Done";
        }
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDZDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQzdCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQixJQUFJLG1CQUFtQjtBQUM1RSw2QkFBNkIsZ0JBQWdCO0FBQzdDLG1DQUFtQyx1QkFBdUI7QUFDMUQsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQ25FMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNtQjtBQUNOO0FBQ0c7QUFDQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tNb2RhbExvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFByb2plY3RcIik7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFxyXG4gICAgYFxyXG4gICAgPGZvcm0gaWQ9XCJwcm9qZWN0XCIgbmFtZT1cInByb2plY3RcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVByb2plY3RcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlUHJvamVjdFwiIGlkPVwidGl0bGVQcm9qZWN0XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMjBcIiB2YWx1ZT1cIlwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRQcm9qZWN0XCI+QWRkIHByb2plY3Q8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIGBcclxuICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsKCk7IiwibGV0IHByb2plY3RMaWJyYXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkNvbnN0cnVjdGlvbiBvZiBhIHJvYm90XCJcclxuICAgIH1cclxuXVxyXG5cclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFByb2plY3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBQcm9qZWN0XCIpO1xyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVByb2plY3RcIik7XHJcblxyXG5sZXQgbG9naWMgPSAoKSA9PiB7XHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsZW1lbnQgPT4ge1xyXG4gICAgYWRkUHJvamVjdFRvTGlicmFyeSgpO1xyXG4gICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gfSlcclxufSAgIFxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvTGlicmFyeSgpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICBwcm9qZWN0TGlicmFyeS5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgYWRkVG9MaXN0KClcclxuICAgIHJlc2V0Rm9ybSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCgpIHtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgXHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChidG4pXHJcbiAgICBidG4uaW5uZXJIVE1MID0gdGl0bGVJbnB1dC52YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpYygpOyIsImZ1bmN0aW9uIHRhc2tNb2RhbCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wVXBUYXNrXCIpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8Zm9ybSBpZD1cIm1vZGFsXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2tcIj5UYXNrOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiBpZD1cInRhc2tcIiBtYXhsZW5ndGg9XCIyMFwiIG1pbmxlbmd0aD1cIjNcIiB2YWx1ZT1cIlwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBtYXhsZW5ndGg9XCIzMFwiIHZhbHVlPVwiXCI+XHJcblxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWVcIiBpZD1cImR1ZVwiIHZhbHVlPVwiXCIgcmVxdWlyZWQ+XHJcblxyXG4gICAgICAgIDxmaWVsZHNldCBjbGFzcz1cInByaW9yaXR5LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+UHJpb3JpdHk6PC9sZWdlbmQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImhpZ2hcIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIm1lZGl1bVwiIHZhbHVlPVwibWVkaXVtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImxvd1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgIFxyXG4gICAgPC9mb3JtPmBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza01vZGFsKCk7IiwiY2xhc3MgdGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHRhc2tMaWJyYXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRhc2s6IFwiVGFza1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgaW50ZXJlc3Rpbmcgc3R1ZmZcIixcclxuICAgICAgICBkdWVEYXRlOiBcIjA2LzA0LzIzXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcclxuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlXCIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3BVcFRhc2tcIik7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcblxyXG5sZXQgdGFza0xvZ2ljID0gKCkgPT4ge1xyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbGVtZW50ID0+IHtcclxuICAgICAgICBhZGRUYXNrVG9MaWJyYXJ5KCk7XHJcbiAgICAgICAgZWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza1RvTGlicmFyeSgpIHtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrKHRhc2tJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBnZXRQcmlvcml0eVZhbHVlKCkpO1xyXG4gICAgdGFza0xpYnJhcnkucHVzaChuZXdUYXNrKTtcclxuICAgIHNob3dUYXNrKCk7XHJcbiAgICByZXNldEZvcm0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlWYWx1ZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwiaGlnaFwiKSByZXR1cm4gXCJIaWdoXCI7XHJcbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlID09IFwibWVkaXVtXCIpIHJldHVybiBcIk1lZGl1bVwiO1xyXG4gICAgZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZSA9PSBcImxvd1wiKSByZXR1cm4gXCJMb3dcIjtcclxuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VGFzaygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3NcIik7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmlvcml0eSAke2dldFByaW9yaXR5VmFsdWUoKX1cIj4ke2dldFByaW9yaXR5VmFsdWUoKX08L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3Rhc2tJbnB1dC52YWx1ZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9uSW5wdXQudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImR1ZVwiPiR7ZHVlRGF0ZUlucHV0LnZhbHVlfTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjayBVbkRvbmVcIj5VbmRvbmU8L2J1dHRvbj5cclxuPC9kaXY+YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTG9naWMoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgcHJvamVjdE1vZGFsIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsXCI7XHJcbmltcG9ydCB0YXNrTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy90YXNrTW9kYWxcIjtcclxuaW1wb3J0IGxvZ2ljIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdE1vZGFsTG9naWNcIlxyXG5pbXBvcnQgdGFza0xvZ2ljIGZyb20gXCIuL21vZHVsZXMvdGFza01vZGFsTG9naWNcIlxyXG5cclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdFwiKTtcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcclxuXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwUHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbn0pXHJcblxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcFVwVGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KVxyXG5cclxuXHJcblxyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHlcIik7XHJcblxyXG5wcmlvcml0eUJ0bi5mb3JFYWNoKGUgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLmlubmVySFRNTCA9PSBcIkhpZ2hcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJIaWdoXCIpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJMb3dcIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJMb3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5pbm5lckhUTUwgPT0gXCJMb3dcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJMb3dcIik7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcIk1lZGl1bVwiKTtcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggZS5pbm5lckhUTUwgPT0gXCJNZWRpdW1cIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJNZWRpdW1cIilcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiSGlnaFwiKTtcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIkhpZ2hcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja1wiKTtcclxuXHJcbnN0YXR1cy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChlLmlubmVySFRNTCA9PSBcIkRvbmVcIikge1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJEb25lXCIpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJVbkRvbmVcIik7XHJcbiAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gXCJVbmRvbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmlubmVySFRNTCA9PSBcIlVuZG9uZVwiKSB7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInVuRG9uZVwiKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcclxuICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBcIkRvbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==