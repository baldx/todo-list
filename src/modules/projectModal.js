const projectModal = (() => {
    const container = document.querySelector(".popUpProject");

    container.innerHTML = 
    `
    <form id="project">
    <label for="titleProject">Title:</label>
    <input type="text" name="titleProject" id="titleProject" required maxlength="20">
    <button type="submit" class="submit">Add project</button>
    </form>
    `
    
})

export default projectModal();