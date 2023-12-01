import style from "./mainProfile.css";
import "../../components/index"
import { Series, User } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import storage  from "../../utils/storage";
import { appState } from "../../store";
import { posterAttribute } from "../poster/poster";
import firebase from "../../utils/firebase";

const userData = {
    pic: {},  
    name: {},
  };

class ProfileInfo extends HTMLElement {

  user?: "";

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

  }

  connectedCallback() {
    const renderAndDo = async () => {
        await this.getUserName()
        this.render();
        this.renderFavorites();
    }
    
    renderAndDo()
  }

  async getUserName(){
    try{const username = appState.viewingProfile
    userData.name = username
    console.log("USERRR NAMEMMEEMEM", username)
    return username}
    catch{}
    
  }

  async getUserPic(){
    try{
    const pic = await firebase.getUserPic(appState.user)
    console.log("ESTE SSSSSSSSSSSSS", pic)
    return pic
     } 
     catch{}
  }

  async setUserPic(){
    const pic = await this.getUserPic()
    if(pic){
      userData.pic = pic
    }
    console.log("PICCC", pic)
  }

  renderFavorites = async () => {
    const container = this.shadowRoot?.querySelector('.favoriteContainer');
    
    const userFound = userData.name;
    console.log("userrrrrrrr señor", userFound)
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

          <div class="profileContainer">
            
          </div>

          <div class="favoriteContainer">
            <h1>Favorite Shows</h1>
          </div>

          <div class="friendContainer">

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
