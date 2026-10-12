const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        errorMessage.textContent =
            "Please enter both a task title and description.";
        return;
    }

    errorMessage.textContent = "";

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskHeading = document.createElement("h3");
    taskHeading.textContent = title;

    const taskParagraph = document.createElement("p");
    taskParagraph.textContent = description;

    taskCard.appendChild(taskHeading);
    taskCard.appendChild(taskParagraph);

    taskList.appendChild(taskCard);

    taskForm.reset();
});