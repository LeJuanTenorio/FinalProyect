import ReviewContainerStyle from "./reviewContainer.css";

import seriesData from "../data/seriesData.ts";

export enum Attribute {
  "id" = "id",
  "logo_title" = "logo_title",
  "background" = "background",
}

class ReviewContainer extends HTMLElement {
  logo_title?: string;
  background?: string;

  static get observedAttributes() {
    const attrs: Record<Attribute, null> = {
      id: null,
      logo_title: null,
      background: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: Attribute,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case Attribute.id:
        //this.id = newValue ? Number(newValue) : undefined;
        break;

      default:
        this[propName] = newValue;
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

    this.logo_title = data.logo_title;
    this.background = data.background;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          ${ReviewContainerStyle}
        </style>
        
        <h1>${this.background}</h1>
      `;
      console.log("sidebarLeft");
    }
  }
}

customElements.define("review-container", ReviewContainer);
export default ReviewContainer;