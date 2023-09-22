export enum Attribute {
  "id" = "id",
  "name" = "name",
  "img" = "img",
}

class User extends HTMLElement {
  name?: string;
  img?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      id: null,
      name: null,
      img: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.name = this.name;
    this.img = this.img;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <h1>${this.name}</h1>
        <img src="${this.img}"></img>
        <style>
        </style>
        `;

      
    }
  }
}

customElements.define("user-info", User);
export default User;