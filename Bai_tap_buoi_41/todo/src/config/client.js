import { config } from "./config.js";
const { SERVER_API_AUTH } = config;
export const client = {
  serverApi: SERVER_API_AUTH,
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  setUrl: function (url) {
    this.serverApi = url;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const headers = {
      "Content-Type": "application/json",
      "X-Api-Key": "apiKey",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
