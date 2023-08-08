for (var i = 1; i <= 8; i++) {
  for (var j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      document.write(
        `<span style="display:inline-block; width: 80px; height: 80px;border: 1px solid #000;"></span>`
      );
    } else {
      document.write(
        `<span style="display: inline-block; background: #000; width: 80px; height: 80px;border: 1px solid #000;"></span>`
      );
    }
  }
  document.write(`<br/>`);
}
