let addTodos = document.querySelector(".btn-add");
let overlay = document.querySelector(".overlay.hidden");
let tableAddTodos = document.querySelector(".table-add-todo.hidden");
let save = document.querySelector(".bottom-btn.add-save");
let cancel = document.querySelector(".bottom-btn.add-cancel");
console.log(tableAddTodos);
addTodos.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.remove("hidden");
  tableAddTodos.classList.remove("hidden");
});
overlay.addEventListener("click", () => {
  tableAddTodos.classList.add("hidden");
  overlay.classList.add("hidden");
});
cancel.addEventListener("click", (e) => {
  tableAddTodos.classList.add("hidden");
  overlay.classList.add("hidden");
});
