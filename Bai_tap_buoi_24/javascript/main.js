var addTask = document.querySelector(".add__task");
var getContent = document.querySelector(".enter__info");
var listTodo = document.querySelector(".list__todos");
var todoListBody = document.querySelector(".todo__list__body");
// console.log(todoListBody);
var values = [];
var result = ``;
var listResult = [];
addTask.addEventListener("click", function () {
  if (!getContent.value) {
    alert("Mời bạn nhập thông tin!!");
    return false;
  }
  listTodo.innerHTML = "";
  values.push(`${getContent.value}`);
  valueContent(values);
});

function valueContent(values) {
  listResult = [];
  values.forEach(function (value, index) {
    result = ``;
    result += `
    <div class="todo">
    <p class="content">${value}</p>
        <div class="event">
          <i class="bx bx-edit edit " onclick="editContent(${index})"></i>
          <i class="bx bx-trash trash" onclick="deleteContent(${index})"></i>
        </div>
    </div>
    `;
    listResult.push(result);
  });
  getContent.value = "";
  listTodo.innerHTML = listResult.join("");
}

function deleteContent(index) {
  values.splice(index, 1);
  valueContent(values);
}
function editContent(index) {
  var number = index;
  listResult[index] = `
    <form class="todo__list__body">
          <input
            type="text"
            class="enter__info nav__info"
            value="${values[index]}"
          />
          <button class="add__task nav__task">Add Task</button>
        </form>`;

  listTodo.innerHTML = listResult.join("");
  var getNavContent = document.querySelector(".nav__info");
  var AddNavTask = document.querySelector(".nav__task");
  AddNavTask.addEventListener("click", function () {
    values[index] = getNavContent.value;
    listResult[index] = `
    <div class="todo">
    <p class="content">${values[index]}</p>
        <div class="event">
          <i class="bx bx-edit edit " onclick="editContent(${index})"></i>
          <i class="bx bx-trash trash" onclick="deleteContent(${index})"></i>
        </div>
    </div>`;
    listTodo.innerHTML = listResult.join("");
    valueContent(values);
  });
}
