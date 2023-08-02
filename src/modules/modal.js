function popUpModal() {
    const container = document.querySelector(".popUp");

    container.innerHTML += `<form id="modal">
    <label for="task">Task:</label>
    <input type="text" name="task" id="task" maxlength="20" minlength="3" required>

    <label for="description">Description:</label>
    <input type="text" name="description" id="description" maxlength="30">

    <label for="due">Due date:</label>
    <input type="date" name="due" id="due" required>

    <fieldset class="priority-group">
        <legend>Priority:</legend>
        <input type="radio" name="priority" id="high" required>
        <label for="priority">High</label>
        <input type="radio" name="priority" id="medium" required>
        <label for="priority">Medium</label>
        <input type="radio" name="priority" id="low" required>
        <label for="priority">Low</label>
    </fieldset>
    
    <button type="submit" class="submit">Add Project</button>
    
</form>`

container.style.display = "block";
};

export default popUpModal;