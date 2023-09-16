//tao element
var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
var carouselDot = document.querySelector(".carousel-dot");
var carouselDotItem = carouselDot.children;
var img = document.querySelectorAll("img");
var carouselNextBtn = document.querySelector(".carousel-nav .next");
var carouselPrevBtn = document.querySelector(".carousel-nav .prev");

//tính kích thước 1 item
var position = 0;
var itemWidth = carouselInner.clientWidth; //lấy kích thước chiều rộng của 1 element

// tính tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;
console.log(totalWidth);
//cập nhật css

carouselInner.style.width = `${totalWidth}px`;

var dot = ``;
for (var i = 0; i < carouselItems.length; i++) {
  dot += `<span></span>`;
}
carouselDot.innerHTML = dot;
carouselDotItem[0].classList.add("active");

for (let i = 0; i < carouselDotItem.length; i++) {
  carouselDotItem[i].addEventListener("click", function (e) {
    position = -itemWidth * i;
    for (let j = 0; j < carouselDotItem.length; j++) {
      carouselDotItem[j].classList.remove("active");
    }
    carouselDotItem[i].classList.add("active");
    console.log(position);
    carouselInner.style.translate = `${position}px`;

    return;
  });
}
//chỉnh nút dot theo Next
function dotNextBtn() {
  for (let j = 0; j < carouselDotItem.length; j++) {
    carouselDotItem[j].classList.remove("active");
  }
  var index = -position / itemWidth;
  carouselDotItem[index].classList.add("active");

  console.log(`index=${index}`);
}
//chỉnh nút dot theo prev
function dotPrevBtn() {
  for (let j = 0; j < carouselDotItem.length; j++) {
    carouselDotItem[j].classList.remove("active");
  }
  var index = -position / itemWidth;
  carouselDotItem[index].classList.add("active");

  console.log(`index=${index}`);
}
// lắng nghe sự kiện của nút next

carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth * 2 > totalWidth) {
    return;
  }
  position -= itemWidth;
  dotNextBtn();
  carouselInner.style.translate = `${position}px`;
});
// lắng nghe sự kiện của nút prev
carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) < itemWidth) {
    return;
  }
  position += itemWidth;
  dotPrevBtn();
  carouselInner.style.translate = `${position}px`;
});
var placeNow = 0;
carouselInner.addEventListener("mousedown", function (e) {
  placeNow = e.pageX;
  document.addEventListener("mousemove", carouselMove);
  document.addEventListener("mouseup", carouselStop);
});
var long = 0;
var distance = 200;
function carouselMove(e) {
  long = e.pageX - placeNow;
  carouselInner.style.transition = "none";
  carouselInner.style.translate = `${position + long}px`;
}
console.log(`long=${long}`);
function carouselStop(e) {
  carouselInner.style.transition = "translate 0.4s ease";

  console.log("vô đây");
  console.log(`long1=${long}`);
  if (long < -distance) {
    placeNow = e.pageX;
    long = 0;
    if (position < -totalWidth + itemWidth * 2) {
      carouselInner.style.translate = `${position}px`;

      document.removeEventListener("mousemove", carouselMove);
      document.removeEventListener("mouseup", carouselStop);
      return;
    } else {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
      dotNextBtn();
    }
  } else {
    carouselInner.style.translate = `${position}px`;
    document.removeEventListener("mousemove", carouselMove);
    document.removeEventListener("mouseup", carouselStop);
  }
  if (long > distance) {
    if (position > -itemWidth) {
      carouselInner.style.translate = `${position}px`;

      document.removeEventListener("mousemove", carouselMove);
      document.removeEventListener("mouseup", carouselStop);
      return;
    } else {
      position += itemWidth;
      dotPrevBtn();
      carouselInner.style.translate = `${position}px`;
    }
  } else {
    carouselInner.style.translate = `${position}px`;
    document.removeEventListener("mousemove", carouselMove);
    document.removeEventListener("mouseup", carouselStop);
  }
}
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("mousedown", function (e) {
    e.preventDefault();
  });
}
