let btn = document.querySelector(".btn");
let notification = document.querySelector(".Notification");
const thongBao = document.createElement("div");
thongBao.className = "thong-bao";
// Tạo một thể hiện mới của SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Đặt một số thuộc tính cho việc nhận diện
recognition.continuous = false;
recognition.lang = "vi-VN"; // Sử dụng tiếng Việt
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Bắt đầu nhận diện khi màn hình được nhấp vào
btn.onclick = () => {
  recognition.start();
  console.log("Sẵn sàng nhận lệnh bằng giọng nói.");
  // if(document.body.ch)
  // document.body.removeChild(thongBao);
  notification.innerHTML = "bạn đang yêu cầu";
  let array = Array.from(document.body.children);
  console.log(array);
  console.log(array[array.length - 1]);
  if (array[array.length - 1] == thongBao) {
    document.body.removeChild(thongBao);
  }
};

// Xử lý sự kiện kết quả
recognition.onresult = (event) => {
  // Lấy chuỗi văn bản đã nhận diện được
  const text = event.results[0][0].transcript;
  // Xử lý chuỗi văn bản để biết được người dùng vừa đọc gì
  notification.innerHTML = `Yêu cầu của bạn là: ${text}`;
  let newText = text.split(" ");
  if (newText.length >= 3) {
    if (text.toLowerCase().includes("zing mp3")) {
      console.log("vô zing");
      //Lấy tên bài hát với cách tìm kiếm là: mở wep zing mp3 bài hát + tên bài hát
      let nameMusic = newText.slice(6).join("%20").toLowerCase();
      console.log(nameMusic);
      window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${nameMusic}`);
    } else if (text.toLowerCase().includes("youtube")) {
      // console.log(newText.slice(4));
      //Lấy tên video với cách tìm kiếm là: mở wep youtube video + tên video
      let nameVideo = newText.slice(4).join("+").toLowerCase();
      console.log(nameVideo);
      window.open(`https://www.youtube.com/results?search_query=${nameVideo}`);
    } else if (text.toLowerCase().includes("google maps")) {
      console.log("mở bản đồ google maps chỉ đường tới");
      // console.log(newText.slice(8));
      //Lấy tên địa chỉ với cách tìm kiếm là: mở bản đồ google maps chỉ đường tới + tên địa chỉ
      let location = newText.slice(8).join("+").toLowerCase();
      window.open(`https://www.google.com/maps/place/${location}`);
    } else {
      thongBao.innerHTML = "Không thực hiện được yêu cầu";
      document.body.append(thongBao);
    }
  } else {
    console.log("vô đây");
    switch (text) {
      case "YouTube":
        window.open("https://youtube.com");
        break;
      case "Google":
        window.open("https://www.google.com/");
        break;
      case "Facebook":
        window.open("https://www.facebook.com/");
        break;
      case "Google Drive":
        window.open("https://drive.google.com/drive/my-drive");
        break;
      case "Google Maps":
      case "bản đồ":
        window.open("https://www.google.com/maps");
        break;
      default:
        thongBao.innerHTML = "Không thực hiện được yêu cầu";
        document.body.append(thongBao);
        break;
    }
  }
};
// Dừng nhận diện khi giọng nói kết thúc
recognition.onspeechend = () => {
  recognition.stop();
};
