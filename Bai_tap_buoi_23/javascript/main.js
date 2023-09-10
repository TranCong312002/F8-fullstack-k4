var login = document.querySelector("#login");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
console.log(login, modal);
login.addEventListener("click", function () {
  if (!modal.classList.contains("js-modal")) {
    modal.classList.add("js-modal");
  } else {
    modal.classList.remove("js-modal");
  }
});

modalOverlay.addEventListener("click", function () {
  modal.classList.remove("js-modal");
});
