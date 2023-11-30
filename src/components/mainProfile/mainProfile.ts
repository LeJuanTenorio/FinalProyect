
import style from "./mainProfile.css";
import "../../components/index"
import { Series, User } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import storage  from "../../utils/storage";
import { appState } from "../../store";

class ProfileInfo extends HTMLElement {

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

      const favoriteContainer = this.shadowRoot.querySelector(".favoriteContainer");
      const friendContainer = this.shadowRoot.querySelector(".friendContainer");

      console.log("ProfileInfo");

      const series = async () => {
        try {
          const userFound = await appState.user;
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

if (!customElements.get("profile-info")) {
  customElements.define("profile-info", ProfileInfo);
}

export default ProfileInfo;
