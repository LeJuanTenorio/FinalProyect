import style from "./configInfo.css";
import "../../components/index"
import { Series, User } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import storage  from "../../utils/storage";
import { appState } from "../../store";
import { posterAttribute } from "../poster/poster";

class ConfigInfo extends HTMLElement {

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
            <div class="upperInfo">
                <img class="profilePic"></img>
                <h1 class="name"></h1>
                <h1 class="changeUr">Cambia tu perfil</h1>
            </div>
            <form class="form">
                <input class="name" type="text" placeholder="cambia tu username"></input>
                <input class="phone" type="tel" placeholder="cambia tu teléfono"></input>
                <input class="password" type="password" placeholder="cambia tu constraseña"></input>
                <input class="button" type="button"></input>
            <form>
        </section>

        <style>
          ${style}
        </style>
      `;

      const friendContainer = this.shadowRoot.querySelector(".friendContainer");

      console.log("configInfo");

      
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

if (!customElements.get("config-info")) {
  customElements.define("config-info", ConfigInfo);
}

export default ConfigInfo;
