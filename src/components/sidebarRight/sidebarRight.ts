import { Poster, Modal, } from ".."; 
import { Attribute } from "../seriesPoster/poster";
import style from "./sidebarRight.css";

import "../../components/index"
import styles from "./styles.css"
import { Series, User } from "../../types/dataManage";
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

      

      console.log("SidebarRight");

      const series = await Firebase.getSeries();
      const seriesReview = await Firebase.getReviews();
      const seriesReviewSpecific = await Firebase.getReview("Dark");
      const people = await Firebase.getUsers();
      const userr = await Firebase.getUser("Julian");
      

      series.forEach((series:Series)=>{
        const posterElement = document.createElement('img');
        posterElement.src = series.poster;
        favoriteContainer?.appendChild(posterElement);
        posterElement.setAttribute('class', 'favorites-poster');
        //console.log(series);
      }) 

      people.forEach((user:User)=>{
        const friendElement = document.createElement('img');
        friendElement.src = user.pic;
        friendContainer?.appendChild(friendElement);
        friendElement.setAttribute('class','friend');
      })
      
      console.log(people);
    }
  }
}

if (!customElements.get("sidebar-right")) {
  customElements.define("sidebar-right", SidebarRight);
}

export default SidebarRight;
