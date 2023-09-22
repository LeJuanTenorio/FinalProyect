import { seriesData } from "../data/seriesData";
import { Poster, Modal } from "../indexExport"; 
import { Attribute } from "../seriesPoster/poster";
import style from "./reviewContainer.css";

class SidebarRight extends HTMLElement {
  poster: Poster[] = [];
  modal: Modal;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    seriesData.forEach((seriesItem) => {
      const posterElement = this.ownerDocument.createElement("poster-img") as Poster;
      posterElement.setAttribute(Attribute.poster, seriesItem.poster);

      posterElement.addEventListener("click", () => {
        this.modal.show();
        console.log("modal");
      });

      this.poster.push(posterElement);
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
            <h1>Favorite Shows</h1>
          </div>
        
        <style>
          ${style}
        </style>
      `;

      const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");
      this.poster.forEach((posterElement) => {
        favoriteContainer?.appendChild(posterElement);
      });

      favoriteContainer?.appendChild(this.modal);

      console.log("SidebarRight");
    }
  }
}

if (!customElements.get("sidebar-right")) {
  customElements.define("sidebar-right", SidebarRight);
}

export default SidebarRight;
