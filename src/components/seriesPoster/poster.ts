import style from "./poster.css";

export enum Attribute {
  poster = "poster",
  background = "background"
}

class Poster extends HTMLElement {
  poster?: string;
  background?: string;

  static get observedAttributes() {
    return [Attribute.poster, Attribute.background];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.poster = this.getAttribute(Attribute.poster) || "";
    this.background = this.getAttribute(Attribute.background)|| "";

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
          <img class="img" src="${this.poster}" onerror="this.style.display='none';">
          <img class="background" src="${this.background}" onerror="this.style.display='none';">
          <style>
          ${style}
          </style>
        `;
    }
  }
}

if (!customElements.get("poster-img")) {
  customElements.define("poster-img", Poster);
}
export default Poster;
