import { config } from "./config.js";
const { serverApi } = config;

export const client = {
  send: async function (url, method = "GET", body = null) {
    const options = {
      method,
      headers: {
        "content-Type": "application/json",
      },
    };
    url = `${serverApi}${url}`;
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return { response, data };
  },
  //http get
  get: function (url) {
    return this.send(url);
  },
};
client.get("/post");
