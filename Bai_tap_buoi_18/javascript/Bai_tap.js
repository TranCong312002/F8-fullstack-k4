var result = "";
var content = `Lorem Ipsum is simply. dummy text of `;
var editContent = content;
var positions = content.indexOf(" ");
var positionsStart = 0;
console.log(positions);
var change = function () {
  if (positions !== -1) {
    console.log(editContent.length);
    result =
      editContent.slice(0, positionsStart) +
      `<span>${editContent.slice(positionsStart, positions)}</span>` +
      editContent.slice(positions);
    console.log(result);
    positionsStart = positions + 1;
    positions = editContent.indexOf(" ", positions + 1);
    console.log(positions);

    result = content;
    document.write(result);
  } else {
    positionsStart = 0;
    positions = editContent.indexOf(" ");
  }
};
console.log(change());
setInterval(change, 2000);
