var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list .list-items");
var moduleItems = document.querySelectorAll(".list .list-items.module");
var STTItem = 0;
var STTModule = 0;
var midItem = 0;
var placeNow = 0;
var targetItem;
var space;
console.log(midItem);
function render(element) {
  var childArr = Array.from(element.children);
  childArr.forEach(function (item, index) {
    item.draggable = true;
    let title = "Bài";
    if (item.classList.contains("module")) {
      title = "Module";
      STTModule++;
    } else {
      STTItem++;
    }
    item.innerHTML = `${title} ${
      title === "Module" ? STTModule : STTItem
    } : <span>${item.innerText}</span>`;
  });
}

render(list);
listItems.forEach(function (value, index) {
  function handleDragEnd(e) {
    //  NewListItems = document.querySelectorAll(".list .list-items");
    list = document.querySelector(".list");
    listItems = document.querySelectorAll(".list .list-items");
    STTItem = 0;
    STTModule = 0;
    value.classList.remove("drag");
    // value.removeEventListener("dragover", handleDrag);
    value.removeEventListener("dragend", handleDragEnd);
    // render(list);
    return "ok";
  }
  function handleDrag(e) {
    e.preventDefault();
    var next = e.clientY;
    if (placeNow - e.clientY >= heightItem / 2) {
      var step = Math.round((placeNow - next) / heightItem);
      list.insertBefore(targetItem, listItems[space - step]);
    } else {
      var step = Math.round((next - placeNow) / heightItem);
      list.insertBefore(targetItem, listItems[space + step]);
    }
  }
  heightItem = value.offsetHeight;

  value.addEventListener("dragstart", function (e) {
    targetItem = e.target;
    space = index;
    placeNow = e.clientY;
    value.classList.add("drag");
    list.addEventListener("dragover", handleDrag);
    value.addEventListener("dragend", handleDragEnd);
  });
});
console.log(listItems);
