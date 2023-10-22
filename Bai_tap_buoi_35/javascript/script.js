import { client } from "./client.js";
import { config } from "./config.js";
const { Page_limit } = config;
let pageNumber = 1;
let loading = false;
const app = {
  rootEl: document.querySelector(".list-content"),
  query: {
    _limit: Page_limit,
    _page: pageNumber,
  },
  render: function (post) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    this.rootEl.innerHTML += `
    ${post
      .map(
        ({ title, excerpt, content }) => `<div class="content">
      <h1>${stripHtml(title)}</h1>
        <hr />
        <p class="excerpt">
          ${stripHtml(excerpt)}
        </p>
        <p class="text-content">
          ${stripHtml(content)}
        </p>
        </div>`
      )
      .join("")}
    
  `;
  },
  getPost: async function (query = {}) {
    let queryString = new URLSearchParams(query).toString();
    queryString = queryString ? "?" + queryString : "";
    loading = true;
    const { data: post } = await client.get(`/post${queryString}`);
    loading = false;
    console.log(queryString);
    console.log(post);
    this.render(post);
  },
  start: function () {
    this.getPost(this.query);
  },
};
window.addEventListener("scroll", () => {
  let maxScrollY =
    window.document.documentElement.scrollHeight - window.innerHeight;
  console.log(maxScrollY);
  console.log(window.scrollY);
  if (loading === false) {
    if (window.scrollY >= maxScrollY * 0.95) {
      pageNumber++;
      app.query._page = pageNumber;
      app.start();
    }
  }
});
app.start();
