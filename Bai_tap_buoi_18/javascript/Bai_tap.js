var result = "";
var editContent = `Lorem Ipsum is simply. dummy text of a b c d e f g `;
var positions = editContent.indexOf(" ");
var positionsStart = 0;
console.log(positions);
var change = function () {
  console.log(editContent.length);
  result =
    editContent.slice(0, positionsStart) +
    `<span>${editContent.slice(positionsStart, positions)}</span>` +
    editContent.slice(positions);
  console.log(result);
  positionsStart = positions + 1;
  positions = editContent.indexOf(" ", positions + 1);
  console.log(positions);
  document.querySelector(".box").innerHTML = result;
  if (positions === -1) {
    positionsStart = 0;
    positions = editContent.indexOf(" ");
  }
};
setInterval(change, 1000);
console.log(change());
