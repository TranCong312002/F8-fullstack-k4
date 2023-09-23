var login = document.querySelector("#login");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var modalLogin = document.querySelector(".modal-login");
var modalRegister = document.querySelector(".modal-register");
var modalContentLogin = document.querySelector(".modal-content-login");
var modalContentRegister = document.querySelector(".modal-content-register");
var formRegister = document.querySelector(".form-register");
var inputChange = document.querySelectorAll("input");
var emailLogin = document.querySelector("#email-login");
console.log(emailLogin);
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

modalLogin.addEventListener("click", function () {
  modalLogin.classList.add("active");
  modalRegister.classList.remove("active");
  modalContentLogin.classList.remove("hidden");
  modalContentRegister.classList.add("hidden");
});
modalRegister.addEventListener("click", function () {
  modalRegister.classList.add("active");
  modalContentLogin.classList.add("hidden");
  modalContentRegister.classList.remove("hidden");
  modalLogin.classList.remove("active");
});
// var number = 0;
for (let value of inputChange) {
  let prevValue = value.value;
  value.addEventListener("change", function (e) {
    var number = 0;

    console.log(number);
  });
}
