import style from "./mainProfile.css";
import "../../components/index"
import { Series, User } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import storage  from "../../utils/storage";
import { appState } from "../../store";
import { posterAttribute } from "../poster/poster";

class ProfileInfo extends HTMLElement {

  user?: "";

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

  }

  connectedCallback() {
    this.render();
    this.renderFavorites();
  }

  renderFavorites = async () => {
    const container = this.shadowRoot?.querySelector('.favoriteContainer');
    
    const userFound = appState.user;
    const favoritesArray = await Firebase.getFavoritesId(userFound);

    for (const data of favoritesArray) {
        const serieMatch = await Firebase.getDocById("SeriesData", data);
        const serieData = serieMatch?.data()
        const resolvedData = serieData;
        const poster = document.createElement('my-poster');
        poster.setAttribute(posterAttribute.serie, resolvedData?.title);
        poster.setAttribute(posterAttribute.poster, resolvedData?.poster);
        poster.setAttribute(posterAttribute.idd, resolvedData?.id);

        container?.appendChild(poster);
    }
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

      const friendContainer = this.shadowRoot.querySelector(".friendContainer");

      console.log("ProfileInfo");

      
      const people = await Firebase.getUsers();

      people.forEach((user:User)=>{
        const friendElement = document.createElement('img');
        friendElement.src = user.pic;
        friendContainer?.appendChild(friendElement);
        friendElement.setAttribute('class','friend');
      })

    }
  }
}

if (!customElements.get("profile-info")) {
  customElements.define("profile-info", ProfileInfo);
}

export default ProfileInfo;
