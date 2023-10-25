let btn = document.querySelector(".btn");
let counter = document.querySelector(".counter");
const interval = 1000;
let number = 10;
let startTime = 0;
counter.innerHTML = number;
function animation(time) {
  if (number === 0) {
    btn.disabled = false;
    btn.addEventListener("click", () => {
      // window.location.href = "https://f88.vn/";
      window.open("https://f88.vn/");
    });
  } else {
    btn.disabled = true;
    if (time - startTime >= interval) {
      console.log(time);
      number--;
      counter.innerHTML = number;

      startTime = time;
    }
  }
  requestAnimationFrame(animation);
}
requestAnimationFrame(animation);

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    console.log("Tab không còn hiển thị");
  } else {
    console.log("Tab đang hiển thị");
  }
});
