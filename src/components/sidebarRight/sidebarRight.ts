import { Poster, Modal, } from "..";
import { Attribute } from "../seriesPoster/poster";
import style from "./sidebarRight.css";
import "../../components/index"
import styles from "./styles.css"
import { Series, User } from "../../types/dataManage";
import { Firestore } from "firebase/firestore";
import Firebase from "../../services/firebase"
import storage  from "../../utils/storage";
import { PersistanceKeys } from "../../utils/storage";

const seriesData: Series = {
    id:"",
    title: "",
    poster: "",
    synopsis: "",
    logo_title: "",
    background: "",
}

class SidebarRight extends HTMLElement {

  user?: "";

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

      const series = async () => {
        try {
          const userFound = await storage.getUserFromStorage();
          const favoritesArray = await Firebase.getFavoritesId(userFound); 
          console.log("favoritos", favoritesArray);
          for (const serie of favoritesArray) {
            const serieMatch = await Firebase.getDocById("SeriesData", serie);
            const serieData = serieMatch?.data()
            console.log("serieMATCH", serieData);
            const poster = this.ownerDocument.createElement('img')
            poster.className = "favorites-poster"
            poster.src = serieData?.poster
            favoriteContainer?.appendChild(poster)
          }
        } catch (error) {
          console.error("Error in series:", error);
        }
      }
      const people = await Firebase.getUsers();


      // series.forEach((series:Series)=>{
      //   const posterElement = document.createElement('img');
      //   posterElement.src = series.poster;
      //   favoriteContainer?.appendChild(posterElement);
      //   posterElement.setAttribute('class', 'favorites-poster');
      //   //console.log(series);
      // })

      people.forEach((user:User)=>{
        const friendElement = document.createElement('img');
        friendElement.src = user.pic;
        friendContainer?.appendChild(friendElement);
        friendElement.setAttribute('class','friend');
      })

      series();

    }
  }
}

if (!customElements.get("sidebar-right")) {
  customElements.define("sidebar-right", SidebarRight);
}

export default SidebarRight;
