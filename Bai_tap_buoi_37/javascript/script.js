import { config } from "./config.js";
import { client } from "./client.js";
const { SERVER_API_AUTH } = config;
client.setUrl(SERVER_API_AUTH);
console.log(client.serverApi);
const app = {
  root: document.querySelector("#root"),
  mainScreen: document.querySelector(".main-screen"),
  logIn: document.querySelector(".btn"),
  signIn: document.querySelector(".login-screen"),
  register: document.querySelector(".register-screen"),
  showError: document.querySelector(".showError"),
  isLogin: function () {
    return localStorage.getItem("login-token") ? true : false;
  },
  render: function () {
    let html = ``;
    if (this.isLogin()) {
      html = `<div class="write-blog">
      <div class="place-write-blog">
        <div class="icon-title">Blogger</div>
        <div class="info-user">
          <span class="icon-user"><a href="#">C</a></span>
          <div class="title"><a href="#">Công</a></div>
        </div>
        <form class="content">
          <label for="write-title">enter your title</label>
          <input
            id="write-title"
            type="text"
            class="write-title"
            placeholder="Please enter your title"
            required
          />
          <label for="write-content">enter your content</label>
          <textarea
            name="content"
            id="content-write"
            class="content-write"
            cols="40"
            rows="10"
            placeholder="content here"
            required
          ></textarea>
          <label for="set-time">set time to post!</label>
          <input
            id="set-time"
            type="date"
            class="set-time"
            placeholder="set time to post"
          />
          <button class="btn-write">Write new!</button>
        </form>
      </div>
      <div class="place-section">
        <section class="info-section">
          <div class="info-user">
            <span class="icon-user"><a href="#">C</a></span>
            <div class="title"><a href="#">Công</a></div>
          </div>
          <h3 class="title-section">aaa</h3>
          <div class="content-section">test UI</div>
          <hr />
        </section>
      </div>
      <button class="btn-logout">Sign out</button>
    </div>`;
    } else {
      html = `<div class="login-screen">
      <div class="view-login">
        <h2 class="title">Đăng nhập</h2>
        <div class="content-view-login">
          Hãy nhập email và mật khẩu của bạn để truy cập vào nền tảng Blogger,
          nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình. Nếu
          bạn chưa có tài khoản, hãy
          <span><a href="#">đăng ký ngay</a></span> để tham gia cộng đồng
          Blogger
        </div>
        <a href="#" class="footer-view"> Về trang chủ </a>
      </div>
      <form class="form-login">
        <label for="email">enter Your email</label>
        <input
          id="email"
          type="email"
          class="email"
          placeholder="Please enter your email"
          required
        />
        <label for="password">enter your password</label>
        <input
          id="password"
          type="password"
          class="password"
          placeholder="Please enter your password"
          required
        />
        <div class="active-form">
          <button class="sign-in" type="submit">Sign in</button>
          <button class="sign-up" type="button">Sign up</button>
        </div>
        <div class="showError"></div>
      </form>
    </div>`;
    }
    this.root.innerHTML = html;
  },
  handleEvent: function () {
    this.logIn.addEventListener("click", (e) => {
      this.render();
    });
    this.root.addEventListener("submit", (e) => {
      e.preventDefault();

      if (e.target.classList.contains("form-login")) {
        this.showError = e.target.querySelector(".showError");
        console.log(this.showError);
        const emailEl = e.target.querySelector(".email");
        const passwordEl = e.target.querySelector(".password");
        const email = emailEl.value;
        const password = passwordEl.value;
        console.log(emailEl.value);
        console.log(passwordEl.value);
        this.login({ email, password });
      }
    });
  },
  login: async function (data) {
    try {
      this.showError.innerHTML = " ";
      const { response, data: token } = await client.post("/auth/login", data);
      console.log(response);
      console.log(token);
      if (!response.ok) {
        throw new Error("email hoặc mật khẩu không hợp lệ");
      }
      localStorage.setItem("login-token", JSON.stringify(token));
      this.render();
    } catch (e) {
      this.showError.innerText = e.message;
    }
  },
  getProfile: async function () {
    try {
      let getToken = localStorage.getItem("login-token");
      console.log(getToken);
      let accessToken;
      if (getToken) {
        accessToken = JSON.parse(getToken).data.accessToken;
        console.log(accessToken);
      }
      if (!accessToken) {
        throw new Error("accessToken is not null");
      }
      const { response, data } = await client.get("/users/profile");
      console.log(response, data);
    } catch (e) {
      console.log(e.message);
    }
  },
  logOut: function () {},
  start: function () {
    this.handleEvent();
    this.getProfile();
  },
};
app.start();
