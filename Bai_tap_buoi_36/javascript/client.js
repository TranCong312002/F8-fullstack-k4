import { config } from "./config.js";
const { serverApi } = config;
console.log(serverApi);
let id = 1;
const timeQues = 10;
export const client = {
  send: async (url, method = "GET", body = null) => {
    url = `${serverApi}/${url}`;
    console.log(url);
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  getQuestions: function (url) {
    console.log(this.send(url));
    return this.send(url);
  },
};
client.getQuestions("questions");
// console.log(client.getQuestions("questions"));
