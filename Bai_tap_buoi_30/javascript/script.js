"use strict";
var controlsFile = document.querySelector(".drop-down .controls-file");
var listControlsFile = document.querySelector(".drop-down .list-controls-file");
var boldBtn = document.querySelector(".text-bold");
var underLineBtn = document.querySelector(".text-underline");
var italicBtn = document.querySelector(".text-italic");
var colorBtn = document.querySelector(".text-color");
var content = document.getElementById("content");
var container = document.querySelector(".container");
var nameFile = document.querySelector("#name-file");
var btnPdf = document.querySelector(".item.btn-pdf");
var btnTxt = document.querySelector(".item.btn-txt");
var btnNew = document.querySelector(".item.btn-new");
var infoContent = document.querySelector(".info-content");
var color = "";
var change = "";
var countCharacters = 0;
var countWord = 0;
function handleControlsFile(e) {
  e.stopPropagation();
  listControlsFile.classList.toggle("hidden");
  if (!listControlsFile.classList.contains("hidden")) {
    document.addEventListener("click", function () {
      listControlsFile.classList.add("hidden");
    });
  }
}
controlsFile.addEventListener("click", handleControlsFile);
boldBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  document.execCommand("bold", false, null);
});
underLineBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  document.execCommand("underline", false, null);
});
italicBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  document.execCommand("italic", false, null);
});
function getColor(e) {
  console.log(colorBtn.value);
  color = `${colorBtn.value}`;
  document.execCommand("foreColor", false, `${color}`);
}

colorBtn.addEventListener("change", getColor);

btnPdf.addEventListener("click", function () {
  var format = {
    filename: `${nameFile.value}.pdf`,
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  content.style.border = "none";
  html2pdf().set(format).from(content).save();
  content.style.border = "1px solid #ccc";
});

btnTxt.addEventListener("click", function () {
  var contentTxt = content.textContent;
  console.log([contentTxt]);
  var blob = new Blob([contentTxt], { type: "text/plain" });

  // Tạo một URL cho Blob
  var blobUrl = URL.createObjectURL(blob);

  // Tạo một thẻ a để tải về tệp tin
  var downloadLink = document.createElement("a");
  downloadLink.href = blobUrl;
  downloadLink.download = "yourTextFile.txt";
  downloadLink.click();
});
btnNew.addEventListener("click", function () {
  content.innerText = "";
  nameFile.value = "untitled";
  countCharacters = 0;
  countWord = 0;
  checkInfoContent();
  if (!listControlsFile.classList.contains("hidden")) {
    listControlsFile.classList.add("hidden");
  }
});
function checkInfoContent(e) {
  var str = content.innerText.trim();
  countCharacters = content.textContent;
  console.log(countCharacters.length);
  console.log(str); //Loại bỏ ký tự khoảng trắng ở đầu và cuối
  if (str) {
    countWord = str.split(/\s+/g).length; //Đếm từ
    infoContent.innerHTML = `Số kí tự: ${countCharacters.length}   Số từ: ${countWord}`;
  } else {
    infoContent.innerHTML = `Số kí tự: ${countCharacters.length}   Số từ: 0`;
  }
}
document.addEventListener("keyup", checkInfoContent);
