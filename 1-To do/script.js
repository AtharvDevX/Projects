document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    window.addTask = function () {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskInput.value} 
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="completeTask(this)">✔</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    };

    window.deleteTask = function (element) {
        element.parentElement.remove();
    };

    window.completeTask = function (element) {
        element.parentElement.classList.toggle("completed");
    };
});
