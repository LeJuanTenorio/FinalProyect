import ReviewContainerStyle from "./reviewContainer.css";
import { seriesData } from "../data/seriesData";

export enum Attribute {
  id = "id",
  logo_title = "logo_title",
  background = "background",
}

class ReviewContainer extends HTMLElement {
  logo_title?: string;
  background?: string;

  static get observedAttributes() {
    return [Attribute.id, Attribute.logo_title, Attribute.background];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.logo_title = this.getAttribute(Attribute.logo_title) || "";
    this.background = this.getAttribute(Attribute.background) || "";

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <h1>${this.logo_title}</h1>
        <img src="${this.background}">
        <style>
          ${ReviewContainerStyle}
        </style>
      `;
      console.log("reviewContainer");
    }
  }
}

customElements.define("review-container", ReviewContainer);
export default ReviewContainer;
