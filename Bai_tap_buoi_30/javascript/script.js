// // Tạo một đối tượng Blob từ chuỗi văn bản
// const text = "Hello, Blob API!";
// const blob = new Blob([text], { type: "text/plain" });

// // Tạo một URL cho Blob
// const blobUrl = URL.createObjectURL(blob);

// // Tạo một thẻ a để tải về tệp tin
// const downloadLink = document.createElement("a");
// downloadLink.href = blobUrl;
// downloadLink.download = "myText.txt";
// downloadLink.textContent = "Download Text File";

// // Thêm thẻ a vào DOM
// document.body.appendChild(downloadLink);
var controlsFile = document.querySelector(".drop-down .controls-file");
var listControlsFile = document.querySelector(".drop-down .list-controls-file");
var boldBtn = document.querySelector(".text-bold");
var underLineBtn = document.querySelector(".text-underline");
var italicBtn = document.querySelector(".text-italic");
var colorBtn = document.querySelector(".text-color");
var content = document.getElementById("content");
var color = "";
var change = "";
function handleControlsFile(e) {
  listControlsFile.classList.toggle("hidden");
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
  color = `${colorBtn}`;
  document.execCommand("#000", false, `${color}`);
}

content.addEventListener("select", function (event) {
  // Xử lý sự kiện select ở đây
  change = window.getSelection().toString();

  colorBtn.addEventListener("change", getColor);
});
