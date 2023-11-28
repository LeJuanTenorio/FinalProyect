import { Poster, Modal } from ".."; 
import style from "./megaReview.css";
import { Series } from "../../types/dataManage";
import Firebase from "../../utils/firebase"
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { AppState } from "../../types/store";

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

  addToLocalStorage(key:string, value:string) {
       if (localStorage.getItem(key)) {
      localStorage.removeItem(key);}
      localStorage.setItem(key, value);
  }

  seriesPageClick(){
    dispatch(navigate(Screens.SERIES));
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
        posterElement.title = series.title;
        posterElement.addEventListener("click", () => {
          this.seriesPageClick();
          this.addToLocalStorage("SERIE", series.title);
      });
        favoriteContainer?.appendChild(posterElement);
        posterElement.setAttribute('class', 'favorites-poster');
      }) 

      console.log("review");
    }
  }
}

if (!customElements.get("mega-review")) {
  customElements.define("mega-review", MegaReview);
}

export default MegaReview;
