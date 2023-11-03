import { Poster, Modal } from ".."; 
import style from "./styles.css";
import { Series } from "../../types/dataManage";
import Firebase from "../../services/firebase"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { AppState } from "../../types/store";


const getFromLocalStorage = async (key:string) => {
    const value = await localStorage.getItem(key);
    if (value !== null) {
      return value;
    } 
}

class SeriesInfo extends HTMLElement {

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
            <style>
            ${style}
            </style>
    
            <section class="mainContainer">
                <div class="containerMid"> </div>
                <div class="containerComment"> </div>
            </section>
            `
      const mainContainer = this.shadowRoot.querySelector(".mainContainer");
      const containerMid = this.shadowRoot.querySelector(".containerMid");
      const containerComment = this.shadowRoot.querySelector(".containerComment");

      const getSerieInfo = await Firebase.getSerie(getFromLocalStorage("SERIE"))

      getSerieInfo.forEach((series:Series) => {
        const posterElement = document.createElement('img');
        posterElement.src = series.background;
        posterElement.title = series.title;
        containerMid?.appendChild(posterElement);
        posterElement.setAttribute('class', 'the-poster');
      })
    }
  }
}

if (!customElements.get("series-info")) {
  customElements.define("series-info", SeriesInfo);
}

export default SeriesInfo;
