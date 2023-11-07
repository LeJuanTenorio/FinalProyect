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
    } }

class SeriesInfo extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }



  async getSerieInfo(){
    
  }
  
  submitReview(){
   
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

      const getSerieInfo = Firebase.getSerie(getFromLocalStorage("SERIE"));
      console.log(getSerieInfo);
      
      getSerieInfo.then((seriesArray) => {
        seriesArray.forEach((series) => {
          const posterElement = document.createElement('img');
          posterElement.src = series.background;
          posterElement.title = series.title;
          containerMid?.appendChild(posterElement);
          posterElement.setAttribute('class', 'the-poster');
        });
      }).catch((error) => {
        console.error(error);
      });

      const commentForm = this.ownerDocument.createElement('form');
            commentForm.id = 'comment-form';
            containerComment?.appendChild(commentForm);

      const commentTextArea = this.ownerDocument.createElement('textarea');
            commentTextArea.id = 'comment-text';
            commentTextArea.placeholder = "What do you think of the show?";
            commentForm.appendChild(commentTextArea);

            const submitButton = this.ownerDocument.createElement('button');
            submitButton.type = 'submit';
            submitButton.innerText = 'Send';
            commentForm.appendChild(submitButton);
    }
  }
}

if (!customElements.get("series-info")) {
  customElements.define("series-info", SeriesInfo);
}

export default SeriesInfo;
