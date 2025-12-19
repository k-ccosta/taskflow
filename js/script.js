const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskValue = taskInput.value;

    const taskItemTrimmed = taskValue.trim();

    if (taskItemTrimmed === "") {
        alert("Por favor, digite uma tarefa válida.");
        return;
    }

    const taskItem = document.createElement("li")
    taskItem.textContent = taskItemTrimmed;
    taskList.append(taskItem);
    taskInput.value = "";
    taskInput.focus();
});