let taskCount = 0;
let completedCount = 0;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("taskList");

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskList.appendChild(taskItem);

    const taskTextElem = document.createElement("p");
    taskTextElem.className = "task-text";
    taskTextElem.textContent = taskText;
    taskItem.appendChild(taskTextElem);

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";
    taskItem.appendChild(taskButtons);

    const completeButton = document.createElement("button");
    completeButton.className = "complete-button";
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
        if (taskItem.classList.contains("completed")) {
            completedCount++;
        } else {
            completedCount--;
        }
        updateCounters();
    });
    taskButtons.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        if (taskItem.classList.contains("completed")) {
            completedCount--;
        }
        taskList.removeChild(taskItem);
        taskCount--;
        updateCounters();
    });
    taskButtons.appendChild(deleteButton);

    taskCount++;
    updateCounters();
    taskInput.value = "";
}

function updateCounters() {
    const totalTasks = document.querySelector(".totalTasks");
    totalTasks.textContent = `Total tasks: ${taskCount}`;

    const completedTasks = document.querySelector(".completedTasks");
    completedTasks.textContent = `Completed tasks: ${completedCount}`;
}

document.querySelector(".input-section button").addEventListener("click", addTask);
