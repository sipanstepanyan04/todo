const BUTTON_ID = "add";

let container = document.querySelector(".container");
let input = document.getElementById("addTodo");
let addButton = document.getElementById(BUTTON_ID);
let todoList = document.getElementById("todoList");

input.addEventListener("input", (event) => {
  if (!event.target.value) {
    addButton.disabled = true;
    addButton.style.cursor = false;
  } else {
    addButton.disabled = false;
    addButton.style.cursor = true;
  }
});

addButton.addEventListener("click", (event) => {
  if (input.value) {
    const todo = document.createElement("div");
    const inputList = document.createElement("input");
    inputList.classList.add("inputList");
    inputList.type = "text";
    inputList.value = input.value;

    todo.classList.add("list");
    input.value = "";

    const edit = document.createElement("button");
    edit.classList.add("editBtn");
    const editIcon = document.createElement("i");
    editIcon.classList.add("icon-edit");

    const save = document.createElement("button");
    save.classList.add("saveBtn");
    const saveIcon = document.createElement("i");
    saveIcon.classList.add("icon-save");

    const remove = document.createElement("button");
    remove.classList.add("removeBtn");
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("icon-remove");

    // save = true;

    edit.addEventListener("click", (event) => {
      if (edit.classList.value === "editBtn") {
        // inputList.removeAttribute("readonly");
        inputList.focus();
        // if() {}
      } else {
        // inputList.setAttribute("readonly");
      }
    });

    todo.appendChild(inputList);
    edit.appendChild(editIcon);
    remove.appendChild(removeIcon);
    todo.appendChild(edit);
    todo.appendChild(remove);
    todoList.appendChild(todo);

    remove.onclick = (event) => {
      todo.remove();
    };
  }
});
