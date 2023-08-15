var result = "";
var editContent = `Lorem Ipsum is simply. dummy text of a b c d e f g `;
var positions = editContent.indexOf(" ");
var positionsStart = 0;

var change = function () {
  result =
    editContent.slice(0, positionsStart) +
    `<span>${editContent.slice(positionsStart, positions)}</span>` +
    editContent.slice(positions);
  positionsStart = positions + 1;
  positions = editContent.indexOf(" ", positions + 1);
  document.querySelector(".box").innerHTML = result;
  if (positions === -1) {
    positionsStart = 0;
    positions = editContent.indexOf(" ");
  }
};
setTimeout(change, 0);
setInterval(change, 1000);
