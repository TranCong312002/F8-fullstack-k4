class F8 {
  constructor() {
    this.name = "Công";
    this.email = "congdz@gmail.com";
  }
  static component(name, Obj) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          const templateEl = document.createElement("template");

          let html = Obj.template;
          templateEl.innerHTML = html;
          const templateNode = templateEl.content.cloneNode(true);
          console.log(templateNode);
          const results = html.match(/{{.+?}}/g);

          if (results) {
            const keys = Object.keys(Obj.data);
            keys.forEach((key) => {
              window[key] = Obj.data[key];
            });
            results.forEach((result) => {
              const variableResults = result.match(/{{(.+?)}}/);
              const nameKey = variableResults[1].trim();
              if (nameKey === "count") {
                html = html.replace(result, count);
              }
              if (nameKey === "title") {
                html = html.replace(result, title);
              }
            });
            templateNode.innerHTML = html;
          }
          templateNode.innerHTML = html;
          this.append(templateNode);
          //   this.append(templateNode);
        }
      }
    );
  }
}
