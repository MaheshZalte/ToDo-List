// script.js

// Select elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Add task function
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
    alert("Please enter a task!");
    return;
    }

  // Create list item
    const listItem = document.createElement("li");

  // Add text
    listItem.textContent = taskText;

  // Add event listener for toggling completion
    listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
    });

  // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

  // Add delete functionality
    deleteButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering the parent click event
    todoList.removeChild(listItem);
    });

  // Add delete button to the list item
    listItem.appendChild(deleteButton);

  // Add list item to the list
    todoList.appendChild(listItem);

  // Clear input field
    todoInput.value = "";
}

// Add event listener to the Add button
addButton.addEventListener("click", addTask);

// Add task on pressing "Enter"
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
    addTask();
    }
});
