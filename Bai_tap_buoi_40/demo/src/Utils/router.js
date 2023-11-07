import Navigo from "navigo";
import { errorNotFound } from "../Error";
const routers = new Navigo("/");

export const router = (arr, screen) => {
  const app = document.querySelector("#app");
  const render = (value) => {
    app.innerHTML = value;
  };
  const routers = new Navigo("/");
  if (Array.isArray(arr)) {
    arr.forEach((value) => {
      console.log(value.path);
      routers.on(`${value.path}`, (data) => {
        let html;
        if (screen) {
          html = screen();
          const change = /\{.*}/;
          html = html.replace(change, value.component(data));
        } else {
          html = value.component(data);
        }
        render(html);
      });
      routers.notFound(() => {
        render(errorNotFound());
      });
      routers.resolve();
    });
  }
};

window.navigate = (path) => {
  routers.navigate(path);
};
