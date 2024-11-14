function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskTextElem = document.createElement("p");
    taskTextElem.className = "task-text";
    taskTextElem.textContent = taskText;

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    const completeButton = document.createElement("button");
    completeButton.className = "complete-button";
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        taskItem.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);

    taskItem.appendChild(taskTextElem);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);

    taskInput.value = "";
}