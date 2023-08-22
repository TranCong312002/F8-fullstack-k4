var arr = [
  [
    "https://i.pinimg.com/564x/ea/dc/f9/eadcf96f662b448495cd69f8b55e8987.jpg",
    "Tiêu đề bài viết",
    "Lorem ipsum dolor, sit amet com ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque vnsectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi!",
  ],
  [
    "https://i.pinimg.com/564x/ea/dc/f9/eadcf96f662b448495cd69f8b55e8987.jpg",
    "Tiêu đề bài viết",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque vm quasi! uri eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti exceptTempora ullam id corporis accusamus molestiae corrupti excepturi!",
  ],
  [
    "https://i.pinimg.com/564x/ea/dc/f9/eadcf96f662b448495cd69f8b55e8987.jpg",
    "Tiêu đề bài viết",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti excepturi! uri eaque veniam quasi! Tempora ullam id corporis accusamus molestiae corrupti except",
  ],
];

var html = ``;

for (var i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    html += `
        <div class="data">
        <img src="${arr[i][0]}">
        <div class="content">
        <h2>${arr[i][1]}</h2>
        <p>${arr[i][2]}</p>
        </div>
        </div>
        <hr>
        `;
  } else {
    html += `
            <div class="data">
            <div class="content">
            <h2>${arr[i][1]}</h2>
            <p>${arr[i][2]}</p>
            </div>
            <img src="${arr[i][0]}">
            </div>
            <hr>
            `;
  }
}

document.write(html);
