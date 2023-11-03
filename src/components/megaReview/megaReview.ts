import { Poster, Modal } from ".."; 
import style from "./megaReview.css";
import { Series } from "../../types/dataManage";
import Firebase from "../../services/firebase"

const seriesData: Series = {
  id:"",
  title: "",
  poster: "",
  synopsis: "",
  logo_title: "",
  background: "",
}

class MegaReview extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="favoriteContainer">
        </div>
        
        <style>
          ${style}
        </style>
      `;

      const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");

      const series = await Firebase.getSeries();
      series.forEach((series:Series)=>{
        const posterElement = document.createElement('img');
        posterElement.src = series.background;
        favoriteContainer?.appendChild(posterElement);
        posterElement.setAttribute('class', 'favorites-poster');
        //console.log(series);
      }) 

      console.log("review");
    }
  }
}

if (!customElements.get("mega-review")) {
  customElements.define("mega-review", MegaReview);
}

export default MegaReview;
