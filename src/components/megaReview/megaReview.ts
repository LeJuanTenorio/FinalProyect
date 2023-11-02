import { seriesData } from "../data/seriesData";
import { Poster, Modal } from ".."; 
import style from "./megaReview.css";

class MegaReview extends HTMLElement {
  background: HTMLImageElement[] = [];
  modal: Modal;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    seriesData.forEach((seriesItem) => {
      const imgElement = this.ownerDocument.createElement("img");
      imgElement.setAttribute("src", seriesItem.background); 
      imgElement.setAttribute("title", seriesItem.title); 

      imgElement.addEventListener("click", () => {
        this.modal.show();
        console.log("modal");
      });

      this.background.push(imgElement);
    });

    this.modal = this.ownerDocument.createElement("my-modal") as Modal;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="favoriteContainer">
        </div>
        
        <style>
          ${style}
        </style>
      `;

      const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");
      this.background.forEach((imgElement) => {
        favoriteContainer?.appendChild(imgElement);
      });

      favoriteContainer?.appendChild(this.modal);

      console.log("review");
    }
  }
}

if (!customElements.get("mega-review")) {
  customElements.define("mega-review", MegaReview);
}

export default MegaReview;
