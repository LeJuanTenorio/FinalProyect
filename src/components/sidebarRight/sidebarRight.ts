import { Poster, Modal, User } from ".."; 
import { Attribute } from "../seriesPoster/poster";
import style from "./sidebarRight.css";

import "../../components/index"
import styles from "./styles.css"
import { Series } from "../../types/dataManage";
import { Firestore } from "firebase/firestore";
import Firebase from "../../services/firebase"

const seriesData: Series = {
    id:"",
    title: "",
    poster: "",
    synopsis: "",
    logo_title: "",
    background: "",
}

class SidebarRight extends HTMLElement {
  poster: Poster[] = [];

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    // seriesData.forEach((seriesItem) => {
    //   const posterElement = this.ownerDocument.createElement("poster-img") as Poster;
    //   posterElement.setAttribute(Attribute.poster, seriesItem.poster);

    //   posterElement.addEventListener("click", () => {
    //     console.log("modal");
    //   });

    //   this.poster.push(posterElement);
    // });
  }

  connectedCallback() {
    this.render();
  }

 async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="container">

          <div class="favoriteContainer">
            <h1>Favorite Shows</h1>
          </div>

          <div class="friendContainer">
            <h1>Friends</h1>
          </div>
        </section>
        
        <style>
          ${style}
        </style>
      `;

      const trailerContainer = this.shadowRoot.querySelector(".trailerContainer");
      const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");
      const friendContainer = this.shadowRoot.querySelector(".friendContainer");

      this.poster.forEach((posterElement) => {
        favoriteContainer?.appendChild(posterElement);
      });

      console.log("SidebarRight");

      const series = await Firebase.getSeries();
      series.forEach((series:Series)=>{
        console.log(series);
      }) 
    }
  }
}

if (!customElements.get("sidebar-right")) {
  customElements.define("sidebar-right", SidebarRight);
}

export default SidebarRight;
