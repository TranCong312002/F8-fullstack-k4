let btn = document.querySelector(".btn");
let counter = document.querySelector(".counter");
const interval = 1000;
let number = 20;
let startTime = 0;

function animation(time) {
  counter.innerHTML = number;
  if (number === 0) {
    btn.disabled = false;
    btn.addEventListener("click", () => {
      window.location.href = "https://f88.vn/";
    });
  } else {
    btn.disabled = true;

    if (time - startTime >= interval) {
      number--;
      startTime = time;
      console.log(time);
    }
    requestAnimationFrame(animation);
  }
}
requestAnimationFrame(animation);
