var progressBar = document.querySelector(".progress-bar");

var progress = document.querySelector(".progress-bar .progress");
var dot = document.querySelector(".progress span");
var infoTime = document.querySelector(".progress-bar .info-time");
var progressBarWidth = progressBar.clientWidth;
var initialClientX;
var currentValue = 0;
var value = 0;
var valueUpdate = 0;
var timeChange = 0;
var currentTime = 0;
progressBar.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    //lấy offsetX=> tính phần trăm theo chiều rộng
    value = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${value}%`;
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    currentValue = value;
  }
});
//set time
function setInfoTime(e) {
  if (e.target.closest(".progress-bar .progress span")) {
    infoTime.style.opacity = "0";
  } else {
    infoTime.style.opacity = "1";
    infoTime.style.left = `${e.offsetX - 5}px`;
    var long = (e.offsetX / progressBarWidth) * 100;
    var TimeHover = (audio.duration * long) / 100;
    infoTime.innerText = `${getTime(TimeHover)}`;
  }
}
function handleUp(e) {
  e.stopPropagation();
  console.log("vô đây");
  currentValue = value;
  timeChange = (audio.duration * value) / 100;
  audio.currentTime = timeChange;
  audio.addEventListener("timeupdate", timeUpdate);
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mouseup", handleUp);
}
progressBar.addEventListener("mousemove", setInfoTime);
handleDrag = function (e) {
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;
  audio.removeEventListener("timeupdate", timeUpdate);
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  document.addEventListener("mouseup", handleUp);

  progress.style.width = `${value}%`;
};

dot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
});

//Nhận giá trị khi kéo, khi bấm chuột xuống
//1. Nhả chuột
// var handleChange = function (value) {
//   console.log(value);
// };

// //2. Bấn chuột xuống, kéo
// var handleInput = function (value) {
//   console.log(value);
// };

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");
var playIcon = `<i class="bx bx-play">`;
var pauseIcon = `<i class="bx bx-pause">`;
var getTime = function (time) {
  var mins = Math.floor(time / 60);
  time = Math.floor(time - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${time < 10 ? "0" + time : time}`;
};
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audio.currentTime = currentTime;
  } else {
    audio.pause();
    audio.currentTime = currentTime;
  }
});

audio.addEventListener("timeupdate", timeUpdate);

audio.addEventListener("pause", function (e) {
  playBtn.innerHTML = playIcon;
});
audio.addEventListener("play", function (e) {
  playBtn.innerHTML = pauseIcon;
});
audio.addEventListener("ended", function (e) {
  audio.currentTime = 0;
});
var btn = document.querySelector(".btn");
var karaokeShow = document.querySelector(".karaoke-show");
var iconDown = karaokeShow.querySelector(".close-tab .down");
var karaokeLyric = karaokeShow.querySelector(
  ".karaoke-content .karaoke-content-lyric"
);

var lyricText = [];
lyric.data.sentences.forEach(function (value, index) {
  var words = [];
  value.words.forEach(function (value, index) {
    words.push(value.data);
  });
  lyricText.push(words.join(" "));

  value.words.forEach(function (value, index) {});
});
function lyricUpdate() {
  var sentences = lyric.data.sentences;
  for (let i = 0; i < sentences.length; i++) {
    var start = sentences[i].words[0].startTime;
    var words = sentences[i].words;
    var end = sentences[i].words[words.length - 1].startTime;
    if (currentTime >= start / 1000) {
      karaokeLyric.innerText = `${lyricText[i]}`;
    } else {
      continue;
    }
  }
}
function timeUpdate(e) {
  currentTimeEl.innerText = getTime(audio.currentTime);
  currentTime = audio.currentTime;
  timeChange = currentTime;
  value = (audio.currentTime * 100) / audio.duration;
  lyricUpdate();
  console.log(currentTime);
  if (currentTime === 0) {
    karaokeLyric.innerText = `Thanh Xuân
    Ca sĩ: Da LAB`;
  }
  progress.style.width = `${value}%`;
}
btn.addEventListener("click", function () {
  karaokeShow.style.top = "0";
});
iconDown.addEventListener("click", function () {
  karaokeShow.style.top = "100%";
});
